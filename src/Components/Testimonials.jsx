import { testimonials } from "../Constants";

export default function Testimonials() {
  return (
    <div>
      <h1 className="text-xl lg:text-5xl md:text-4xl text-center mx-auto mt-12 mb-4 text-white tracking-wide">What People Are Saying</h1>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-x-0">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-8 xl:ml-28 xl:w-[27rem] lg:mb-8 lg:w-80 lg:mx-0 lg:ml-32 md:mb-8 bg-neutral-800 text-neutral-300 w-[19rem] h-72 rounded-xl py-8 px-4 mx-auto">
            <div>
              <p className="text-md">{testimonial.text}</p>
            </div>
            <div className="flex flex-row gap-4 ">
              <img src={testimonial.image} className="w-10 h-10 rounded-full" alt="Image" />
              <div>
                <p>{testimonial.user}</p>
                <p className="text-neutral-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[300px] mx-auto lg:w-[750px] md:w-[680px] xl:w-[100rem] bg-white h-[1px] mt-24 mb-16"></div>
    </div>
  );
}
