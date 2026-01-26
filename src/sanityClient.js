// src/sanityClient.js
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "1jnig6bx",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
