import Image from 'next/image';

import { images, videos } from '../utils/arts';

const Art: React.FC = () => {
  return (
    <div className="flex flex-wrap items-start w-full h-full px-8 mx-auto xl:w-11/12 2xl:w-9/12 justify-evenly">
      {images.map((image, i) => (
        <div
          key={image.src}
          style={{ order: (i % 12) + 1 }}
          className={`flex ${
            image.width / image.height > 1.5 ? 'md:w-8/12 lg:w-8/12' : 'md:w-6/12 lg:w-5/12'
          } w-full p-4 m-8 dark:bg-white bg-gray-100 relative z-10 shadow-2xl`}>
          <Image src={image} alt="art" placeholder="blur" objectFit="contain" className="z-10" />

          <div className="absolute z-0 scale-110 opacity-40 saturate-[4] blur-3xl">
            <Image src={image} alt="art" placeholder="blur" objectFit="contain" />
          </div>
        </div>
      ))}
      {videos.map((video, i) => (
        <div
          key={video}
          className="relative flex p-4 m-8 bg-gray-100 shadow-2xl dark:bg-white"
          style={{ order: (i % 12) + 1 }}>
          <video loop muted playsInline autoPlay className="z-10">
            <source src={video} type="video/mp4" />
          </video>
          <video
            loop
            muted
            playsInline
            autoPlay
            className="absolute z-0 scale-150 opacity-30 saturate-150 bg-zoom-150 blur-3xl">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};

export default Art;
