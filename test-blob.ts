import { list } from "@vercel/blob";

async function test() {
  try {
    const { blobs } = await list({
      token: process.env.BLOB_READ_WRITE_TOKEN
    });
    if (blobs.length > 0) {
      const urlToFetch = blobs[0].url;
      console.log("Fetching:", urlToFetch);
      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`
        }
      });
      console.log("Status:", res.status);
      console.log("Text:", await res.text());
    }
  } catch (e) {
    console.error(e);
  }
}

test();
