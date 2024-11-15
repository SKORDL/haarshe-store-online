export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  details: string;
  price_id: string;
  amazon_link: string | null;
  shopify_link: string | null;
  wallmart_link: string | null;
  tiktok_link: string | null;
}
