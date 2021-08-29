import Image from 'next/image';
import { useRef, useState } from 'react';

import { images, videos } from '@/utils/arts';

const Images = () => {
  return (
    <>
      {images.map((image, i) => (
        <div
          key={image.src}
          style={{ order: (i % 12) + 1 }}
          className={`flex ${
            image.width / image.height > 1.5 ? 'md:w-8/12 lg:w-8/12' : 'md:w-6/12 lg:w-5/12'
          } w-full p-2 md:p-4 m-4 md:m-8 dark:bg-white bg-gray-100 relative z-10 shadow-2xl`}>
          <Image
            src={image}
            alt="art"
            placeholder="blur"
            objectFit="contain"
            className="z-10"
            priority
            blurDataURL={image.blurDataURL}
          />

          <div className="absolute z-0 scale-110 opacity-40 saturate-[4] blur-3xl">
            <Image
              src={image}
              alt="art"
              placeholder="blur"
              objectFit="contain"
              priority
              blurDataURL={image.blurDataURL}
            />
          </div>
        </div>
      ))}
    </>
  );
};

const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 group-hover:rotate-[360deg] duration-200"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const Pause = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="invisible w-20 h-20 group-hover:visible"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const Video = (props: { video: string; poster: string | undefined; index: number }) => {
  const { video, poster, index } = props;

  const [playing, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoShadowRef = useRef<HTMLVideoElement | null>(null);

  const onPlayPause = () => {
    if (!(videoRef.current && videoShadowRef.current)) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      videoShadowRef.current.play();

      setPlaying(true);
    } else {
      videoRef.current.pause();
      videoShadowRef.current.pause();

      setPlaying(false);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center p-2 m-4 bg-gray-100 shadow-2xl md:m-8 md:p-4 dark:bg-white"
      style={{ order: (index % 12) + 1 }}>
      <button
        onClick={onPlayPause}
        className="absolute z-30 flex items-center justify-center w-full h-full text-white group">
        {playing ? <Pause /> : <Play />}
      </button>
      <video ref={videoRef} loop muted playsInline className="z-10 min-w-[50vw]">
        <source src={video} type="video/mp4" />
      </video>
      <video
        ref={videoShadowRef}
        loop
        muted
        playsInline
        className="absolute z-0 scale-150 opacity-30 saturate-200 bg-zoom-150 blur-3xl min-w-[50vw]"
        poster={poster}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

const Videos = () => {
  return (
    <>
      {videos.map(([video, poster], index) => (
        <Video key={video} video={video} poster={poster} index={index} />
      ))}
    </>
  );
};

const Art: React.FC = () => {
  return (
    <div className="flex flex-wrap items-start w-full mx-auto overflow-hidden justify-evenly">
      <Images />
      <Videos />
    </div>
  );
};

export default Art;
