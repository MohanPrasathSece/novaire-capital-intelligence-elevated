import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put, list } from "@vercel/blob";
import crypto from "crypto";

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
    return res.status(455).json({ error: "Method not allowed" });
  }

  const { action } = req.query;

  try {
    if (action === "signup") {
      const { name, email, phone } = req.body;

      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Name, email, and phone number are required." });
      }

      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return res.status(500).json({ error: "Server configuration error: Blob token is missing." });
      }

      const lowerEmail = email.toLowerCase();
      
      // Check if user exists
      const { blobs } = await list({
        prefix: `users/${lowerEmail}.json`,
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      
      if (blobs.length > 0) {
        return res.status(400).json({ error: "Account already exists!" });
      }

      const userJson = JSON.stringify({ name, email: lowerEmail, phone });
      await put(`users/${lowerEmail}.json`, userJson, {
        access: "private",
        token: process.env.BLOB_READ_WRITE_TOKEN,
        addRandomSuffix: false
      });

      const sessionToken = crypto.randomUUID();
      await put(`sessions/${sessionToken}.json`, JSON.stringify({ email: lowerEmail, createdAt: new Date().toISOString() }), {
        access: "private",
        token: process.env.BLOB_READ_WRITE_TOKEN,
        addRandomSuffix: false
      });

      // CRM Integration for Signup
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
        email: lowerEmail,
        first_name: firstName,
        last_name: lastName,
        custom_fields: {
          Source_ID: "website",
          How_Much_Invested: "0",
          Outline_Your_Case: ""
        }
      };

      try {
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
          body: JSON.stringify({ website: "Lumière Chain", type: "signup", name: name, email: email})
        }).catch(() => {});
      } catch(e){}
    }

    if (crmResponse.ok) {
      try {
        const url = (typeof process !== 'undefined' && process.env && process.env.VITE_DASHBOARD_URL) || "https://autodigix-leads-dashboard.vercel.app/api/increment";
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Lumière Chain", type: "signup", name: name, email: email})
        }).catch(() => {});
      } catch(e){}
    }

    if (!crmResponse.ok) {
          console.error("CRM signup submission error details:", await crmResponse.text());
        }
      } catch (err) {
        console.error("CRM fetch error on signup:", err);
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
        user: { name, email: lowerEmail, phone },
        sessionToken
      });

    } else if (action === "login") {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email address is required." });
      }

      const lowerEmail = email.toLowerCase();

      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return res.status(500).json({ error: "Server configuration error: Blob token is missing." });
      }

      // List blobs matching the email prefix to verify if the file exists
      const { blobs } = await list({
        prefix: `users/${lowerEmail}.json`,
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      
      if (blobs.length > 0) {
        const fileUrl = blobs[0].url;
        
        try {
          const fileRes = await fetch(fileUrl, {
            headers: {
              Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`
            }
          });
          
          if (fileRes.ok) {
            const userData = await fileRes.json();
            const sessionToken = crypto.randomUUID();
            
            await put(`sessions/${sessionToken}.json`, JSON.stringify({ email: lowerEmail, createdAt: new Date().toISOString() }), {
              access: "private",
              token: process.env.BLOB_READ_WRITE_TOKEN,
              addRandomSuffix: false
            });

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
              user: userData,
              sessionToken
            });
          } else {
            const errText = await fileRes.text();
            console.error("Failed to read private user blob:", fileRes.status, errText);
            return res.status(500).json({ error: "Failed to read account details from secure storage." });
          }
        } catch (fetchErr) {
          console.error("Fetch error reading blob:", fetchErr);
          return res.status(500).json({ error: "Server error while retrieving account." });
        }
      }

      return res.status(404).json({ error: "Email not registered. Please sign up first." });

    } else {
      return res.status(400).json({ error: "Invalid action." });
    }
  } catch (error: any) {
    console.error("Auth server error:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
}
