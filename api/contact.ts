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
    const { name, email, phone, countryCode = "CH", message, amount } = req.body;

    if (!name || !email || !phone) {
      return res.status(200).json({ success: false, error: "Name, email, and phone number are required." });
    }

    const [firstName, ...lastNameParts] = (name || "Unknown").trim().split(" ");
    const lastName = lastNameParts.length > 0 ? lastNameParts.join(" ") : "";

        const dialCodes: Record<string, string> = {
      FR: "33", CH: "41", BE: "32", CA: "1", US: "1", 
      GB: "44", DE: "49", ES: "34", IT: "39", NL: "31", SE: "46", AU: "61",
      IN: "91", AE: "971", SG: "65", ZA: "27", BR: "55", MX: "52", JP: "81", CY: "357"
    };
    
    const countryName = countryCode.toLowerCase();
    const code = dialCodes[countryCode.toUpperCase()] || "41";

    let formattedPhone = (phone || "").replace(/[^0-9+]/g, '');
    if (formattedPhone) {
      if (formattedPhone.startsWith('+')) {
        formattedPhone = '00' + formattedPhone.slice(1);
      }
      if (formattedPhone.startsWith(code) && !formattedPhone.startsWith('00' + code)) {
        formattedPhone = '00' + formattedPhone;
      }
      if (!formattedPhone.startsWith('00' + code)) {
        if (formattedPhone.startsWith('0') && !formattedPhone.startsWith('00')) {
          formattedPhone = '00' + code + formattedPhone.slice(1);
        } else if (!formattedPhone.startsWith('00')) {
          formattedPhone = '00' + code + formattedPhone;
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

    const crmText = await crmResponse.text();
    let crmData = crmText;
    try { crmData = JSON.parse(crmText); } catch(e) {}
    
    const lowerResp = typeof crmData === 'object' ? JSON.stringify(crmData).toLowerCase() : String(crmData).toLowerCase();

    if (crmResponse.status === 500 || crmResponse.status === 409 || lowerResp.includes("already") || lowerResp.includes("exist") || lowerResp.includes("contacted") || lowerResp.includes("500") || lowerResp.includes("internal server")) {
      return res.status(200).json({ success: false, error: "You have already contacted us. Please wait while our team reviews your request. We'll get back to you soon." });
    }

    if (crmResponse.status === 400 || lowerResp.includes("lead is not valid")) {
      return res.status(200).json({ success: false, error: "Le serveur est actuellement occupé. Veuillez nous contacter plus tard." });
    }

    if (crmResponse.ok) {
      // Increment dashboards only if CRM accepted
      try {
        const url = (typeof process !== 'undefined' && process.env && process.env.VITE_DASHBOARD_URL) || "https://lead-dashboard-orcin.vercel.app/api/increment";
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Lumière Chain", type: "contact", name: name, email: email})
        }).catch(() => {});
      } catch(e) {}

      try {
        const host = req.headers.host || "localhost:3000";
        const protocol = host.startsWith("localhost") ? "http" : "https";
        fetch(`${protocol}://${host}/api/leads-count`, { method: "POST" }).catch(() => {});
      } catch (e) {}
    } else {
      console.error("CRM contact submission error details:", crmText);
      return res.status(200).json({ success: false, error: "Failed to submit to CRM." });
    }

    res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been received successfully."
    });
  } catch (error: any) {
    const rawMsg = (error.message || error.toString() || "").toLowerCase();
    if (rawMsg.includes("already") || rawMsg.includes("exist") || rawMsg.includes("contacted") || rawMsg.includes("500") || rawMsg.includes("internal server")) {
      if (typeof res.status === 'function') {
        return res.status(200).json({ success: false, error: "You have already contacted us. Please wait while our team reviews your request. We'll get back to you soon." });
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ success: false, error: "You have already contacted us. Please wait while our team reviews your request. We'll get back to you soon." }));
        return;
      }
    }

    console.error("Contact server error:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
}
