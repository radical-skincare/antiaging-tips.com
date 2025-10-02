"use client"

import { CardContent } from "@/components/ui/card"

export default function WhyRadical() {
  return (
    <CardContent className="space-y-4 pb-6">
      <h2 className="text-2xl font-semibold">
        Why Radical Youth Infusion Serum Took the #1 Spot
      </h2>
      <p>
        While other serums do part of the job, Radical Skincare combines every major
        factor we look for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">The Right Ingredients —</span> A synergistic blend
          of peptides (to rebuild collagen), advanced hyaluronic technology (for deep
          hydration), and antioxidants (to fight oxidative stress — the #1 cause of
          premature aging).
        </li>
        <li>
          <span className="font-semibold">The Right Delivery —</span> Lightweight,
          fast-absorbing texture that layers seamlessly and encourages daily, consistent
          use — because skincare only works if you actually want to apply it.
        </li>
        <li>
          <span className="font-semibold">The Right Standards —</span> Radical Skincare
          maintains full transparency on ingredients, with formulas backed by proven
          dermatology research.
        </li>
        <li>
          <span className="font-semibold">The Right Effect —</span> Testers consistently
          noticed smoother texture within days, followed by visible improvements in
          firmness and fine lines over weeks.
        </li>
        <li>
          <span className="font-semibold">The Right Results —</span> Instead of just
          hydrating the surface, Youth Infusion works at the root: rebuilding skin’s
          structure, protecting it from daily stress, and restoring a radiant, youthful
          appearance.
        </li>
      </ul>
    </CardContent>
  )
}
