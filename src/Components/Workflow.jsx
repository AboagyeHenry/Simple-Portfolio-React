import {workflows} from "../Constants/index"

export default function Workflow() {
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-xl lg:text-5xl md:text-4xl text-center mx-auto text-white tracking-wide">
          Accelerate your{" "}
          <span className="bg-gradient-to-r bg-orange-500 to-orange-800 bg-clip-text text-transparent">
            coding workflow
          </span>
        </h1>
      </div>

      <div className="flex flex-col justify-center lg:flex lg:flex-row xl:gap-10  md:flex md:flex-col md:mx-10 text-center gap-16 lg:gap-8 mt-16">
        <div><img src="/src/assets/code.jpg" className="w-[20rem] mx-auto lg:w-[25rem] md:w-[30rem] xl:w-[35rem]"  alt="Codes" /></div>
        <div className="flex flex-col gap-7 lg:flex lg:flex-col lg:gap-4  md:flex md:flex-row md:flex-wrap xl:gap-12 text-white">
          {workflows.map((workflow, index) => (
            <div key={index}>
              <div className="flex  max-w-[20rem] xl:max-w-sm mx-auto text-start mt-8 lg:mt-2 gap-8">
                <div className="text-green-500 mt-1">{workflow.icon}</div>
                <div>
                  <h1 className="text-start text-xl lg:text-lg xl:text-xl">{workflow.title}</h1>
                  <p className="text-sm text-neutral-500">{workflow.description}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
