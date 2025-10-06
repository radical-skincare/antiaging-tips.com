import Hero from "@/components/hero";
import Introduction from "@/components/intoduction";
import Murad from "@/components/serums/murad";
import Radical from "@/components/serums/radical";
import Protini from "@/components/serums/protini";
import PaulaChoice from "@/components/serums/PaulaChoice";
import EsteeLauder from "@/components/serums/EsteeLauder";
import WhyRadical from "@/components/WhyRadical";
import BottomLine from "@/components/BottomLine";
import SpecialOffer from "@/components/SpeicalOffer";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 absolute top-4 left-0 right-0 max-w-4xl mx-auto px-10">
        <span className="uppercase text-xs font-semibold tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded">
          Advertorial
        </span>
        <h1 className="text-lg font-semibold text-gray-800">Beauty Secrets</h1>
      </div>
      <Hero />
      <Introduction/>
      <div className="py-16 ps-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Top 5 Serums</h2>
        <Radical/>
        <Murad/>
        <Protini/>
        <PaulaChoice/>
        <EsteeLauder/>
        <WhyRadical/>
        <BottomLine/>
        <SpecialOffer/>
      </div>
    </div>
  );
}
