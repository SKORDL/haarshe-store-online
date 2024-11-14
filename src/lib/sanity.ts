import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "hw0rkcby",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: true,
});

export const usersClient = createClient({
  projectId: "hw0rkcby",
  dataset: "users_data",
  apiVersion: "2024-11-01",
  token: process.env.SANITY_WRITE_TOKEN, // Using the write token
  useCdn: false,
  perspective: "published",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
