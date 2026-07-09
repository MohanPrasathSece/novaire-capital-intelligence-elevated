import type { VercelRequest, VercelResponse } from "@vercel/node";

const CRM_TOKEN = process.env.CRM_TOKEN || "AFF_1_92cbc1bc76284e19b711bab22587d75f";
const CRM_ENDPOINT = process.env.CRM_ENDPOINT || "https://inwo.crmcore.me/api/lead_management/api/affiliates";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, amount } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Name, email, and phone number are required." });
    }

    const [firstName, ...lastNameParts] = (name || "Unknown").trim().split(" ");
    const lastName = lastNameParts.length > 0 ? lastNameParts.join(" ") : "Lead";

    let formattedPhone = (phone || "").replace(/[^0-9+]/g, '');
    if (formattedPhone) {
      if (formattedPhone.startsWith('+')) {
        formattedPhone = '00' + formattedPhone.slice(1);
      }
      if (formattedPhone.startsWith('41') && formattedPhone.length === 11) {
        formattedPhone = '00' + formattedPhone;
      }
      if (!formattedPhone.startsWith('0041')) {
        if (formattedPhone.startsWith('0') && !formattedPhone.startsWith('00')) {
          formattedPhone = '0041' + formattedPhone.slice(1);
        } else if (!formattedPhone.startsWith('00')) {
          formattedPhone = '0041' + formattedPhone;
        }
      }
    } else {
      formattedPhone = "0000000000";
    }

    const crmPayload = {
      country_name: countryName,
      description: "Lumière Chain",
      phone: formattedPhone,
      email: email,
      first_name: firstName,
      last_name: lastName,
      custom_fields: {
        Source_ID: "website",
        How_Much_Invested: amount || "0",
        Outline_Your_Case: message || ""
      }
    };

    const crmResponse = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${CRM_TOKEN}`
      },
      body: JSON.stringify(crmPayload)
    });

    if (crmResponse.ok) {
      try {
        const url = (typeof process !== 'undefined' && process.env && process.env.VITE_DASHBOARD_URL) || "https://autodigix-leads-dashboard.vercel.app/api/increment";
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Lumière Chain", type: "contact", name: name, email: email})
        }).catch(() => {});
      } catch(e){}
    }

    if (crmResponse.ok) {
      try {
        const url = (typeof process !== 'undefined' && process.env && process.env.VITE_DASHBOARD_URL) || "https://autodigix-leads-dashboard.vercel.app/api/increment";
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Lumière Chain", type: "contact", name: name, email: email})
        }).catch(() => {});
      } catch(e){}
    }

    if (!crmResponse.ok) {
      const errText = await crmResponse.text();
      console.error("CRM contact submission error details:", errText);
      return res.status(502).json({ error: "Failed to submit to CRM." });
    }

    return 
    // Fire-and-forget: increment leads count
    try {
      const host = req.headers.host || "localhost:3000";
      const protocol = host.startsWith("localhost") ? "http" : "https";
      fetch(`${protocol}://${host}/api/leads-count`, { method: "POST" }).catch((err) =>
        console.warn("[leads-count] Failed to increment:", err)
      );
    } catch (e) {
      console.warn("[leads-count] Error triggering increment:", e);
    }

    res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been received successfully."
    });
  } catch (error: any) {
    console.error("Contact server error:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
}
