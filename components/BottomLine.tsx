"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BottomLine() {
  return (
    <section className="mx-auto font-light space-y-4 pt-8">
      <h2 className="text-2xl md:text-3xl font-semibold">The Bottom Line</h2>
      <p>
        You could spend hundreds testing serum after serum, only to find many are little more
        than fancy moisturizers. Or, you can choose a formula that combines the best of modern
        anti-aging science in one bottle.
      </p>

      <p>
        👉 That’s why we recommend <span className="font-semibold">Radical Skincare’s Youth Infusion Serum</span>: 
        because it doesn’t just make your skin look better today — it helps your skin become stronger, 
        firmer, and healthier for tomorrow.
      </p>
      <Button className="mx-auto rounded-sm bg-[#333333] block px-8 py-2 text-md h-auto font-light my-6">
        <Link href="https://shop.radicalskincare.com/products/youth-infusion-serum-15ml-bogo">Shop Youth Infusion Serum →</Link>
      </Button>
    </section>
  )
}
