import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { Star } from "lucide-react";

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    reviews,
    ratings
  }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data: simplifiedProduct[] = await getData(category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {category}
        </h1>
        <div className="pt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div
              key={product._id}
              className="group relative flex flex-col h-full"
            >
              <Link
                href={`/product/${product.slug}`}
                className="flex flex-col flex-grow"
              >
                <div className="flex flex-col h-full">
                  {/* Image container with fixed aspect ratio */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <Image
                      src={product.imageUrl}
                      alt="Product image"
                      className="w-full h-full object-cover object-center"
                      width={300}
                      height={300}
                    />
                  </div>

                  {/* Product info with fixed heights */}
                  <div className="flex flex-col flex-grow justify-between">
                    {/* Title and category with fixed heights */}
                    <div className="pt-4">
                      <h3 className="text-xl font-semibold line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 h-6 overflow-hidden">
                        {product.categoryName}
                      </p>
                    </div>

                    {/* Price and rating section */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="inline-flex items-center justify-center rounded-lg bg-green-100 px-4 py-2">
                        <span className="text-green-600 text-lg font-semibold">
                          ${product.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-600">
                          {product.ratings} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
