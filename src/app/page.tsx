import BannerOffer2 from "@/components/AdBanner";
import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import TopPicks from "@/components/ui/TopPicks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <div className="flex justify-center">
        <BannerOffer2 />
      </div>
      <TopPicks />
      <div className="flex justify-center mt-10">
        <Image
          src="/testimonails.png"
          alt="Testimonial Image"
          width={1300}
          height={2000}
        ></Image>
      </div>
    </div>
  );
}
