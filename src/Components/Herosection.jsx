import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"


export default function Herosection() {
  return (
    <div className="flex flex-col items-center text-white lg:h-screen md:h-[90vh] pt-10">
      <h1 className=" text-2xl lg:text-5xl md:text-4xl text-center tracking-wide">
        Blemo.Dev build tools
        <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for <br /> developers
        </span>
      </h1>
      <p className="text-center text-lg mt-8 max-w-80 md:max-w-2xl  ">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        to immersive reality
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <a
          href="#"
          className=" bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-md py-2 px-8"
        >
          Start for free
        </a>
        <a
          href="#"
          className="border-solid border-2 text-white rounded-md py-2 px-8"
        >
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
        <source src={video2} type="video/mp4" />
          Your browser does not support the video
        </video>
      </div>
    </div>
  );
}
