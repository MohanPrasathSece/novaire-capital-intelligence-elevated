import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put, list } from "@vercel/blob";

// Keep a local in-memory database of users for local development or fallback
const localUsers = new Map<string, { name: string; email: string; phone: string }>();

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

      // 1. Submit the data to the CRM
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      const crmPayload = {
        country_name: "cy",
        description: "Lumière Chain User Signup",
        phone: phone,
        email: email,
        first_name: firstName,
        last_name: lastName || "",
        custom_fields: {
          Source_ID: "Website",
          Outline_Your_Case: "Lumière Chain Platform Signup"
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

        if (!crmResponse.ok) {
          const errText = await crmResponse.text();
          console.error("CRM Submission error details:", errText);
        }
      } catch (crmErr) {
        console.error("Failed to connect to CRM:", crmErr);
        // Requirement: "After CRM submission, continue with the signup flow" and "Handle API failures gracefully"
      }

      // 2. Authenticate users using Blob/Vercel Authentication only.
      // Save user to Vercel Blob
      let savedToBlob = false;
      if (process.env.BLOB_READ_WRITE_TOKEN) {
        try {
          const userJson = JSON.stringify({ name, email, phone });
          await put(`users/${email.toLowerCase()}.json`, userJson, {
            access: "public",
            addRandomSuffix: false
          });
          savedToBlob = true;
        } catch (blobErr) {
          console.error("Vercel Blob storage failed, using memory fallback:", blobErr);
        }
      }

      if (!savedToBlob) {
        localUsers.set(email.toLowerCase(), { name, email, phone });
      }

      return res.status(200).json({
        success: true,
        user: { name, email, phone }
      });

    } else if (action === "login") {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email address is required." });
      }

      const lowerEmail = email.toLowerCase();
      let userFound = false;
      let userData = null;

      // Check Vercel Blob
      if (process.env.BLOB_READ_WRITE_TOKEN) {
        try {
          // List blobs matching the email prefix to verify if the file exists
          const { blobs } = await list({
            prefix: `users/${lowerEmail}.json`
          });
          
          if (blobs.length > 0) {
            const fileUrl = blobs[0].url;
            const fileRes = await fetch(fileUrl);
            if (fileRes.ok) {
              userData = await fileRes.json();
              userFound = true;
            }
          }
        } catch (blobErr) {
          console.error("Vercel Blob read failed, checking memory fallback:", blobErr);
        }
      }

      // Check memory fallback
      if (!userFound && localUsers.has(lowerEmail)) {
        userData = localUsers.get(lowerEmail);
        userFound = true;
      }

      if (!userFound) {
        return res.status(404).json({ error: "Email not registered. Please sign up first." });
      }

      // Login must NEVER send data to the CRM.
      return res.status(200).json({
        success: true,
        user: userData
      });

    } else {
      return res.status(400).json({ error: "Invalid action." });
    }
  } catch (error: any) {
    console.error("Auth server error:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
}
