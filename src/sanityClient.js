// src/sanityClient.js
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "5ctqhyr7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
