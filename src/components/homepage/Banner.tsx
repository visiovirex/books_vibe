import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/hero_img.jpg";
import Link from "next/link";

function Banner() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-slate-300 px-6 py-10 md:grid-cols-2 md:px-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">
              Books to freshen up <br />
              your bookshelf
            </h1>

            <Link href="/listedbooks" className="btn btn-success">View The List</Link>
          </div>

          <div className="flex justify-center">
            <Image
              src={bannerImage}
              alt="Books Vibe"
              className="w-full max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
