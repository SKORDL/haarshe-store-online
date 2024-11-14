import { type SchemaTypeDefinition } from "sanity";
import { product } from "./products";
import category from "./category";
import heroImages from "./heroImages";
import users from "./users";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImages, product, category, users],
};
