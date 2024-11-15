import Ad from "@/components/ad";
import BannerOffer2 from "@/components/AdBanner";
import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import Newest from "@/components/Newest";
import TopPicks from "@/components/TopPicks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px]  bg-purple-800 opacity-20 blur-[100px]"></div>
      </div>
      <div className="relative">
        <HeroSlider />
        <Newest />
        {/* <Ad /> */}
        <div className="flex justify-center">
          <BannerOffer2 />
        </div>
        <TopPicks />
        <Ad />
        <div className="flex justify-center mt-10">
          <Image
            src="/testimonails.png"
            alt="Testimonial Image"
            width={1300}
            height={2000}
          ></Image>
        </div>
      </div>
    </div>
  );
}
