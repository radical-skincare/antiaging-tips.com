"use client"

import { CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export default function SpecialOffer() {
  return (
    <div className="space-y-4 pb-6 font-light mt-10">
      <h2 className="text-3xl font-semibold">Special Offer for Our Readers</h2>
      <p>We reached out to Radical Skincare after our review, and they agreed to extend an exclusive deal:</p>
      <ul className="list-disc list-inside ps-6 font-semibold">
        <li>Up to 30% Off — Limited Time</li>
        <li>OR Buy 2, Get 1 Free (most popular)</li>
        <li>60-Day Money-Back Guarantee (best value)</li>
      </ul>
      <p>At this price — with zero risk — it’s the perfect time to see how Youth Infusion Serum can help you restore firmness, smooth lines, and protect your skin for years to come.</p>
      <Button className="mx-auto rounded-sm bg-[#333333] block px-8 py-2 text-md h-auto font-light my-6">
        <Link href="https://shop.radicalskincare.com/products/youth-infusion-serum-15ml-bogo">Shop Youth Infusion Serum →</Link>
      </Button>
    </div>
  )
}