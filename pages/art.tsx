import Image from 'next/image';

import { images, videos } from '../utils/arts';

const Art: React.FC = () => {
  return (
    <div className="w-full h-full grid-cols-3 grid-rows-3">
      {images.map((image) => (
        <div key={image.src} className="flex max-w-screen-sm p-4 m-4">
          <Image src={image} alt="art" placeholder="blur" />
        </div>
      ))}
      {videos.map((video) => (
        <div key={video} className="flex max-w-screen-sm p-4 m-4">
          <video loop muted playsInline autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};

export default Art;
