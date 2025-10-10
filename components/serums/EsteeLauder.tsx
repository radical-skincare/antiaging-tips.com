"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Check, X, Star } from "lucide-react"
import Image from "next/image"

export default function EsteeLauder() {
  return (
    <Card className="w-full mx-auto shadow-lg rounded-lg py-0 font-light mb-8">
      <CardHeader className="bg-[#E6E6E6] rounded-t-lg py-12">
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          №5 – Estée Lauder Advanced Night Repair
        </CardTitle>
        <p className="text-center">(Hydration & Overnight Repair Classic)</p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 mb-4">
          <div className="flex justify-center items-center shadow-md rounded-md">
            <Image
              height={200}
              width={200}
              src="/estee-lauder-advanced-night-repair.webp"
              alt="Estée Lauder Advanced Night Repair"
              className="object-cover rounded-md max-h-[220px] w-full"
            />
          </div>
          <div className="p-4 shadow-md rounded-xl w-full text-center grid items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Overall Grade</p>
              <p className="text-2xl md:text-3xl font-bold">B-</p>
            </div>
          </div>
          <div className="p-4 shadow-md rounded-xl w-full text-center grid items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Rating</p>
              <p className="text-2xl md:text-3xl font-bold mb-4">8.0/10</p>
              <div className="flex justify-center mt-1 text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500" />
                ))}
                <Star className="h-4 w-4 text-gray-300" />
              </div>
            </div>
          </div>
        </div>

        <p>
          A beloved classic, Advanced Night Repair kept skin hydrated and comfortable
          overnight. It excelled at moisture retention but fell short in direct
          collagen-boosting and firming effects.
        </p>
      </CardContent>

      <CardContent className="space-y-4 pb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Why it’s here:</h3>
          <ul className="list-disc list-inside space-y-1 py-4 px-6">
            <li>Hydration powerhouse with hyaluronic acid</li>
            <li>Trusted, long-standing reputation</li>
            <li>Less targeted at collagen and elasticity</li>
          </ul>
        </div>

        <div className="space-y-2 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Effectiveness</span>
            <Progress
              value={80}
              className="flex-1 h-4 [&>div]:bg-[#4aa34f] max-w-[520px] ms-auto me-2"
            />
            <span>8.0/10</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Formula Quality</span>
            <Progress
              value={81}
              className="flex-1 h-4 [&>div]:bg-[#4aa34f] max-w-[520px] ms-auto me-2"
            />
            <span>8.1/10</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">PROS</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" /> Excellent hydration
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" /> Trusted skincare staple
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">CONS</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-600" /> Not focused on firming
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-600" /> Texture may feel heavy under moisturizers
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p>
            <span className="font-semibold">Verdict: </span> A safe and hydrating choice
            for loyal fans — but less effective as a complete anti-aging solution
            compared to newer peptide-driven serums.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
