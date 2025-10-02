"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Check, X, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Radical() {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-lg py-0 font-light mb-8">
      <CardHeader className="bg-[#E6E6E6] rounded-t-lg py-12">
        <CardTitle className="text-3xl font-semibold text-center">
          №1 – Radical Skincare Youth Infusion Serum
        </CardTitle>
        <p className="text-center">
          (Best All-in-One Anti-Aging Solution)
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 mb-4">
          <div className="flex justify-center items-center shadow-md rounded-md">
            <Image
              height={200}
              width={200}
              src="/youth-infusion-serum.jpeg" 
              alt="Radical Youth Infusion Serum"
              className="object-cover rounded-md max-h-[220px] w-full"
            />
          </div>
          <div className="p-4 shadow-md rounded-xl w-full text-center grid items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Overall Grade</p>
              <p className="text-3xl font-bold">A+</p>
            </div>
          </div>
          <div className="p-4 shadow-md rounded-xl w-full text-center grid items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Rating</p>
              <p className="text-3xl font-bold mb-4">9.7/10</p>
              <div className="flex justify-center mt-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Out of every serum we reviewed, the Youth Infusion Serum stood out immediately.</p>
          <p>From the very first week of testing, it delivered noticeable improvements in hydration and texture — leaving skin smoother, softer, and visibly refreshed. Over time, our testers consistently reported firmer-looking skin, fewer fine lines, and a more radiant glow.</p>
          <p>And it all happened without heaviness, irritation, or complicated routines. Just apply morning and night, and let the formula do the work.</p>
          <p>Most telling of all… the majority of testers chose to keep using Youth Infusion Serum even after the review period was over.</p>
        </div>
        <Button className="mx-auto rounded-sm bg-[#333333] block px-8 py-2 text-md h-auto font-light my-6">
          <Link href="https://shop.radicalskincare.com/products/youth-infusion-serum-15ml-bogo">Visit Site</Link>
        </Button>
      </CardContent>
      <CardContent className="space-y-4 pb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Why it’s #1:</h3>
          <ul className="list-disc list-inside space-y-1 py-4 px-6">
            <li>Balanced, science-backed formula — peptides, hyaluronic tech, and antioxidants</li>
            <li>Lightweight absorption, perfect under makeup or moisturizer</li>
            <li>Transparent ingredients with clinical backing</li>
          </ul>
        </div>
        <div className="space-y-2 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Effectiveness</span>
            <Progress 
              value={97} 
              className="flex-1 h-4 [&>div]:bg-[#4aa34f] max-w-[520px] ms-auto me-2" 
            />
            <span>9.7/10</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Formula Quality</span>
            <Progress 
              value={96} 
              className="flex-1 h-4 [&>div]:bg-[#4aa34f] max-w-[520px] ms-auto me-2" 
            />
            <span>9.6/10</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">PROS</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" /> Multi-dimensional formula (firmness, hydration, protection)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" /> Lightweight, non-greasy texture
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" /> Visible improvements in texture within weeks
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">CONS</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-600" /> Only available online
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            <span className="font-semibold">Our experience: </span> Testers noticed smoother texture within days, stronger hydration balance, and gradual improvement in firmness and fine lines. Many said their skin felt healthier, not just temporarily plumped.
          </p>
        </div>
        <Button className="mx-auto rounded-sm bg-[#333333] block px-8 py-2 text-md h-auto font-light mt-6">
          <Link href="https://shop.radicalskincare.com/products/youth-infusion-serum-15ml-bogo">Visit Site</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
