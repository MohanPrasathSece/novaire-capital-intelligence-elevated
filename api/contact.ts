import type { VercelRequest, VercelResponse } from "@vercel/node";

const CRM_TOKEN = process.env.CRM_TOKEN || "AFF_1_92cbc1bc76284e19b711bab22587d75f";
const CRM_ENDPOINT = "https://inwo.crmcore.me/api/lead_management/api/affiliates";

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
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Name, email, and phone number are required." });
    }

    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    const crmPayload = {
      country_name: "cy",
      description: message || "",
      phone: phone,
      email: email,
      first_name: firstName,
      last_name: lastName || "",
      custom_fields: {
        Source_ID: "Website",
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

    if (!crmResponse.ok) {
      const errText = await crmResponse.text();
      console.error("CRM contact submission error details:", errText);
      return res.status(502).json({ error: "Failed to submit to CRM." });
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been received successfully."
    });
  } catch (error: any) {
    console.error("Contact server error:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
}
