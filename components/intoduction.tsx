import Image from "next/image";

export default function Introduction() {
  return (
    <section className="introduction px-6">
      <div>
        <Image
          src="/Radical-Skincare-Tincture.jpg"
          width={1000}
          height={520}
          alt="Radical Skincare Tincture"
          className="object-cover rounded-sm shadow-lg max-h-[520px] mb-10"
        />
        <div className="lg:col-span-2 space-y-4 font-light">
          <p>Over the last decade, anti-aging skincare has seen a revolution in science-backed ingredients.</p>
          <p>Collagen-supporting peptides now work like messengers, telling skin to rebuild its own structure. Advanced hyaluronic molecules hydrate beyond the surface, plumping from within. And antioxidants shield against pollution and UV — the biggest accelerators of visible aging.</p>
          <p>It's no wonder celebrities and influencers are turning to high-performance serums instead of quick fixes. But while some products truly change the way skin looks and feels, others are little more than expensive moisturizers in fancy packaging.</p>
          <p>With so many bottles promising miracles, the question remains: Which serums actually deliver visible results?</p>
        </div>
         <div className="mt-8">
           <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Ranked These Serums</h2>
           <p className="mb-4 font-light">We evaluated each serum based on five key factors that matter most in skin health:</p>
           <ol className="space-y-2 list-decimal list-inside pl-6 font-light">
             <li>
               <strong>Proven Ingredients</strong> – Are the peptides, antioxidants, and hydrators backed by clinical research, and present in effective amounts?
             </li>
             <li>
               <strong>Real Impact</strong> – Does it target root causes of aging (collagen loss, oxidative stress, dehydration), not just offer a quick surface fix?
             </li>
             <li>
               <strong>Texture & Use</strong> – Lightweight enough for daily use and layering — because results only come with consistency.
             </li>
             <li>
               <strong>Tolerance</strong> – Safe for a range of skin types, including sensitive skin.
             </li>
             <li>
               <strong>Value</strong> – Does performance justify the price, based on both science and user results?
             </li>
           </ol>
         </div>
      </div>
    </section>
  );
}