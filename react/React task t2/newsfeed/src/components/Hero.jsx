import { FaNewspaper } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        <FaNewspaper className="text-7xl mx-auto mb-5" />

        <h1 className="text-5xl font-bold">
          Stay Updated with the Latest News
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Read breaking news from Technology, Sports, Business,
          Health and Entertainment all in one place.
        </p>

        <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
          Explore News
        </button>

      </div>
    </section>
  );
};

export default Hero;