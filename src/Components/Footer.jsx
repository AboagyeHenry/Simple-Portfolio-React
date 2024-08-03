import { communityLinks, platformLinks, resourcesLinks } from "../Constants";

export default function Footer() {
  return (
    <div className="flex flex-col xl:mx-40 xl:gap-x-60 md:flex-row md:mx-auto gap-y-8 mb-4">
      <div className="text-center text-xl text-white md:ml-20 lg:ml-48">
      <h1 className="text-white">Getting Started</h1>
        {resourcesLinks.map((resources, index) => (
          <div key={index}>
            <div className="text-center text-xl">
               <ul className=" text-lg text-neutral-500">
              <li><a href={resources.href}>{resources.text}</a></li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="w-72 mx-auto md:mx-4">
      <h1 className="text-center text-xl text-white">Platform</h1>
        {platformLinks.map((platform, index) => (
          <div key={index}>
            <div className="text-center text-white">
              <ul className=" text-lg text-neutral-500">
              <li><a href={platform.href}>{platform.text}</a></li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className=" mx-auto md:mx-4">
      <h1 className="text-center text-xl text-white">Community</h1>
        {communityLinks.map((community, index) => (
          <div key={index}>
            <div className="text-center text-white">
              <ul className=" text-lg text-neutral-500">
                <li><a href={community.href}>{community.text}</a></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
