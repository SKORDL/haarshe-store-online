import { type SchemaTypeDefinition } from "sanity";
import { product } from "./products";
import category from "./category";
import heroImages from "./heroImages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImages, product, category],
};
