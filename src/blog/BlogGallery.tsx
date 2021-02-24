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
    <div className=" ">
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex flex-col">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <div className=" md:grid md:grid-cols-3  gap-6 md:mx-6 mx-12  cursor-pointer items-center align-middle justify-center">
              <div className="md:col-span-2 md:m-8">
                <h2 className="flex font-bold text-2xl">{elt.title}</h2>
                <h3 className="flex text-base">{elt.description}</h3>
                <div className="text-sm">{format(new Date(elt.date), 'LLL d, yyyy')}</div>
              </div>

              <div className=" md:w-full md:mr-8">
                <Image src={elt.image} alt="Picture of the author" width={500} height={290} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </div>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogGallery };
