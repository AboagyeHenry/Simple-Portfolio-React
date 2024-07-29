import { LetterText } from "lucide-react";
import { features } from "../Constants";

export default function Featuresection() {
  return (
    <div className="text-white">
      <div className="flex flex-col text-center mb-10 lg:my-10">
        <h3 className="text-xl mb-4">FEATURE</h3>
        <h1 className="text-2xl lg:text-5xl md:text-4xl text-center text-white tracking-wide">Easily buil your code</h1>
      </div>

      <div className="flex flex-wrap my-20 lg:mx-35 h-full">
        {features.map((feature,index) => (
          <div key={index} className="w-full lg:w-1/3 sm:w-1/2 mt-12">
            <div className="flex">
              <div className=" mx-6 w-10 h-10 p-2 justify-center text-orange-700 text-center rounded-full bg-neutral-900">{feature.icon}</div>
              <div>
                <h5 className="mt-2 text-lg">{feature.title}</h5>
                <p className="text-md  text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
