import { pricingOptions } from "../Constants";
import { CheckCircle2Icon } from "lucide-react";

export default function Pricing() {
  return (
    <div className="mt-20">
      <h2 className="text-xl lg:text-5xl md:text-4xl text-center mx-auto my-12 text-white tracking-wide">
        Pricing
      </h2>

      <div className="flex flex-col gap-14 lg:flex lg:flex-row md:flex md:flex-row lg:mx-48 md:mx-16 md:flex-wrap">
        {pricingOptions.map((price, index) => (
          <div key={index}>
            <div className=" text-white w-full">
              <div className="flex flex-col gap-4 border-solid border-zinc-500 border-[1px] mx-auto p-8 rounded-2xl w-72 h-96 ">
                <h1 className="text-2xl">
                  {price.title}{" "}
                  <span className="text-2xl">
                    {price.title === "Pro" && (
                      <span className="text-orange-500">(Most Popular)</span>
                    )}
                  </span>
                </h1>

                <h1 className="text-3xl">{price.price}</h1>
                <ul className="flex flex-col text-md gap-4">
                  {price.features.map((feature, i) => (
                    <li className="flex gap-2" key={i}>
                      <CheckCircle2Icon /> <p>{feature}</p>
                    </li>
                  ))}
                </ul>
                <button className="px-3 py-2 my-4 rounded-lg border-2 hover:bg-orange-800 transition duration-200 border-orange-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
