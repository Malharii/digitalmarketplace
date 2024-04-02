import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";
const perks = [
  {
    name: "Instant Devlivery",
    Icon: ArrowDownToLine,
    description:
      "get your assets delivered to your email in seconds and Download them rigth away",
  },
  {
    name: "Garunteed Quality",
    Icon: CheckCircle,
    description:
      "evry assets on your platform is verifed by our team  to ensure our very quality product . Not happy? we offer a 30-day  refund gurantee",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      "we've pledged 1% of sales to the preservation  and restoreation of the natural environment  ",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm-text-6xl">
            Your Market place for high-quality{""}
            <span className="text-blue-600">Digital Assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to malhar&apos;s Digital hippo every Assets on our platform
            is verfied by our team to ensure our highest quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise</Button>
          </div>
        </div>
        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products?sort=recent"
          title="Brand new"
        />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perks) => (
              <div
                key={perks.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perks.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h1 className="text-base font-medium text-gray-900">
                    {perks.name}
                  </h1>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {" "}
                    {perks.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
