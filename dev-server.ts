import http from "http";
import url from "url";
import authHandler from "./api/auth";
import contactHandler from "./api/contact";

const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url || "", true);
  const pathname = parsedUrl.pathname;

  const vercelReq = req as any;
  vercelReq.query = parsedUrl.query;
  
  let body = "";
  req.on("data", chunk => {
    body += chunk;
  });
  
  req.on("end", async () => {
    try {
      if (body) {
        if (req.headers["content-type"]?.includes("application/json")) {
          vercelReq.body = JSON.parse(body);
        } else {
          vercelReq.body = body;
        }
      }
    } catch (e) {
      vercelReq.body = {};
    }

    const vercelRes = res as any;
    vercelRes.status = (statusCode: number) => {
      res.statusCode = statusCode;
      return vercelRes;
    };
    vercelRes.json = (data: any) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      return vercelRes;
    };

    try {
      if (pathname === "/api/auth") {
        await authHandler(vercelReq, vercelRes);
      } else if (pathname === "/api/contact") {
        await contactHandler(vercelReq, vercelRes);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
    } catch (err) {
      console.error("Error executing serverless function:", err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Local dev API server running on http://localhost:${PORT}`);
});
