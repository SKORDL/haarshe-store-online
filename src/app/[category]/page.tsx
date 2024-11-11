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
    "categoryName": category->name
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
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {category}
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <Link href={`/product/${product.slug}`}>
                <div className="flex flex-col">
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <Image
                      src={product.imageUrl}
                      alt="Product image"
                      className="w-full h-full object-cover object-center"
                      width={300}
                      height={300}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 pt-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{product.categoryName}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center rounded-lg bg-green-100 px-4 py-2">
                      <span className="text-green-600 text-lg font-semibold">
                        ${product.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-gray-600">
                        {4.5} ({10} reviews)
                      </span>
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
