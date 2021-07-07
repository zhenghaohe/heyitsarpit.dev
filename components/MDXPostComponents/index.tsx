/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Link from 'next/link';

export const components = {
  a: ({ href = '', ...props }) => {
    return (
      <Link href={href} passHref>
        <a className="link" {...props} />
      </Link>
    );
  },
  img: ({ children, ...props }: { children: React.ReactNode }) => (
    <div className="my-5">
      <img {...(props as any)} layout="fill" />
    </div>
  )
};
