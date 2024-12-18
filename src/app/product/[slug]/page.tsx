import AddToBag from "@/components/AddToBag";
import CheckoutNow from "@/components/CheckoutNow";
import ImageGallery from "@/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Truck } from "lucide-react";
import Newest from "@/components/Newest";
import TopPicks from "@/components/TopPicks";
import CartProvider from "@/components/Providers";
import InfoBoxes from "@/components/InfoBoxes";
import ButtonProp from "@/components/ButtonProps";
import Ad from "@/components/ad";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          details,
          "slug": slug.current,
          "categoryName": category->name,
          price_id,
          reviews,
          ratings,
          amazon_link,
          shopify_link,
          wallmart_link,
          tiktok_link
      }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data: fullProduct = await getData(slug);

  return (
    <div className="bg-white pt-8">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="w-full">
            <ImageGallery images={data.images} />
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">{data.reviews}</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                {data.ratings} Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${parseFloat((data.price + 30).toFixed(2))}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              {/* <CartProvider>
                <CheckoutNow
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  key={data._id}
                  price_id={data.price_id}
                />
              </CartProvider> */}
            </div>

            <div className="mt-6 flex items-center gap-2 text-gray-500">
              <ShoppingBag className="w-6 h-6" />
              <span className="text-sm">or buy on</span>
            </div>
            <div className="flex items-center gap-3">
              <ButtonProp
                className="mt-6"
                text="Amazon"
                variant="primary"
                link={data.amazon_link}
              />
              <ButtonProp
                className="mt-6"
                text="WallMart"
                variant="outline"
                link={data.wallmart_link}
              />
              <ButtonProp
                className="mt-6"
                text="Shopify"
                variant="secondary"
                link={data.shopify_link}
              />
              <ButtonProp
                className="mt-6"
                text="TikTok"
                variant="outlineBlack"
                link={data.tiktok_link}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
            <div className="mt-8">
              <InfoBoxes />
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-150"></div>
        <div>
          <h1 className="mt-8 text-2xl font-bold text-gray-800 lg:text-3xl">
            Product Details
          </h1>
          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {data.details}
          </p>
        </div>
        <div className="mt-10 border-t border-slate-150"></div>
        <div>
          <h1 className="mt-8 text-2xl font-bold text-gray-800 lg:text-3xl">
            Reviews
          </h1>
          <p className="mt-12 text-base text-gray-500 tracking-wide">
            Give a review
          </p>
        </div>
        <div className="mt-10 border-t border-slate-150"></div>
        <div>
          <Ad />
        </div>
        <div>
          <TopPicks />
        </div>
      </div>
    </div>
  );
}
