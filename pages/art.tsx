// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Image from 'next/image';

import art from '../public/art/2017-06-03_20-34-40_UTC.jpg';
import art2 from '../public/art/2017-07-21_15-48-48_UTC.jpg';
import art3 from '../public/art/2019-03-24_16-53-37_UTC_2.jpg';

const Art: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex max-w-screen-sm p-4 m-4 bg-gray-100 dark:bg-white">
        <Image src={art} alt="art" />
      </div>
      <div className="flex max-w-screen-sm p-4 m-4 bg-gray-100 dark:bg-white">
        <Image src={art2} alt="art" />
      </div>
      <div className="flex max-w-screen-sm p-4 m-4 bg-gray-100 dark:bg-white">
        <Image src={art3} alt="art" />
      </div>
    </div>
  );
};

export default Art;
