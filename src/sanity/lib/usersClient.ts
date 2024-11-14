import { createClient } from "next-sanity";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!process.env.NEXT_PUBLIC_SANITY_USERS_DATASET) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_USERS_DATASET");
}

if (!process.env.SANITY_WRITE_TOKEN) {
  throw new Error("Missing SANITY_WRITE_TOKEN");
}

export const usersClient = createClient({
  projectId: "hw0rkcby",
  dataset: "users_data",
  apiVersion: "2024-11-01",
  token: process.env.SANITY_WRITE_TOKEN, // Using the write token
  useCdn: false,
  perspective: "published",
});
