
import Image from "next/image";
import banner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto mt-7 rounded-3xl bg-[#f5f7f4] px-6 py-12 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left: Text Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-green-700 mb-5">
            Discover Your Next Read
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] tracking-tight text-slate-800">
            Books to freshen up
            <span className="block mt-3 text-green-700">
              your bookshelf.
            </span>
          </h1>

          <p className="mt-6 text-base font-light leading-relaxed text-slate-500 max-w-md">
            Explore inspiring stories, discover new favorites, and find
            the perfect book for your next reading adventure.
          </p>

          <button className="mt-8 rounded-full bg-green-700 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-green-800">
            View The List
          </button>
        </div>

        {/* Right: Banner Image */}
        <div className="flex justify-center items-center">
          <Image
            src={banner}
            alt="Book Vibe Banner"
            className="w-[75%] h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
