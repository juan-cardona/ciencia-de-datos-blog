import React from 'react';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="md:grid md:grid-cols-3 gap-6 justify-center items-center">
      {props.posts.map((elt) => (
        <li
          key={elt.slug}
          className="mb-3 flex flex-col md:m-6 m-12 items-center align-middle justify-center"
        >
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <h2 className="flex">{elt.title}</h2>
              <div className=" md:w-full">
                <Image src={elt.image} alt="Picture of the author" width={500} height={500} />
              </div>
            </a>
          </Link>

          <div>{format(new Date(elt.date), 'LLL d, yyyy')}</div>
        </li>
      ))}
    </div>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogGallery };
