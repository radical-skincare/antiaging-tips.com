"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Check, X, Star } from "lucide-react"
import Image from "next/image"

export default function PaulaChoice() {
  return (
    <Card className="w-full mx-auto shadow-lg rounded-lg py-0 font-light mb-8">
      <CardHeader className="bg-[#E6E6E6] rounded-t-lg py-12">
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
          №4 – Paula’s Choice Pro-Collagen Multi-Peptide Booster
        </CardTitle>
        <p className="text-center">(Clean, Research-Driven Formula)</p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 mb-4">
          <div className="flex justify-center items-center shadow-md rounded-md">
            <Image
              height={200}
              width={200}
              src="/pro-collagen.avif"
              alt="Paula’s Choice Pro-Collagen Multi-Peptide Booster"
              className="object-cover rounded-md max-h-[220px] w-full"
            />
          </div>
          <div className="p-4 shadow-md rounded-xl w-full text-center grid items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Overall Grade</p>
              <p className="text-2xl md:text-3xl font-bold">B</p>
            </div>
          </div>
          <div className="p-4 shadow-md rounded-xl w-full text-center grid items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Rating</p>
              <p className="text-2xl md:text-3xl font-bold mb-4">8.3/10</p>
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
          This peptide booster impressed us with its transparency and gentle formulation.
          It layered well in routines and worked for sensitive testers, though results
          appeared slower compared to more concentrated serums.
        </p>
      </CardContent>

      <CardContent className="space-y-4 pb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Why it’s here:</h3>
          <ul className="list-disc list-inside space-y-1 py-4 px-6">
            <li>Multi-peptide diversity supports elasticity and barrier repair</li>
            <li>Gentle, fragrance-free formula</li>
            <li>Less dramatic short-term results</li>
          </ul>
        </div>

        <div className="space-y-2 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Effectiveness</span>
            <Progress
              value={82}
              className="flex-1 h-4 [&>div]:bg-[#4aa34f] max-w-[520px] ms-auto me-2"
            />
            <span>8.2/10</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Formula Quality</span>
            <Progress
              value={83}
              className="flex-1 h-4 [&>div]:bg-[#4aa34f] max-w-[520px] ms-auto me-2"
            />
            <span>8.3/10</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">PROS</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" /> Safe for sensitive skin
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" /> Clean and fragrance-free
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">CONS</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-600" /> Takes longer to see changes
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-600" /> Higher price per milliliter
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p>
            <span className="font-semibold">Verdict: </span> A reliable and gentle choice
            for ingredient-conscious users — best for those who prefer steady, gradual
            results over quick transformations.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
