import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="">
      <div className="">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <h1 className="text-3xl font-bold">
              Radical Skincare Anti-Aging Serum Compared — And Why You Might{" "}
              <span className="text-primary">Rethink All Your Other Serums</span>
            </h1>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="lg:col-span-2 space-y-4 font-light">
              <p>Anti-aging serums are quickly becoming the go-to solution for women who want firmer skin, fewer lines, and a radiant glow — without resorting to expensive treatments or invasive procedures. But here's the truth not every serum is worth your time or money.</p>
              <p>We looked at ingredients, absorption technology, and real-world results to cut through the hype. The difference was clear — only a handful of serums deliver on their promises, and one stood out for its ability to go deeper than surface-level hydration.</p>
            </div>
            <div className="flex gap-4">
              <Image 
                src="/Emily-Hartman.png" 
                alt="Emily Hartman, skincare expert" 
                width={60} 
                height={60}
                className="object-cover rounded-full w-[60px] h-[60px]"
              />
              <div className="flex flex-col justify-center">
                <div>
                  <h3 className="text-xs">Written by Dr. Emily Hartman, June 2025</h3>
                  <p className="text-xs font-light">Board-Certified Women’s Health Specialist</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}