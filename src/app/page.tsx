import Hero from "@/components/Hero";
import ReviewCard from "@/components/ReviewCard";

export default function HomePage() {
  return (
    <main className="bg-[#F9F6F1] text-gray-900">
      {/* Hero */}
      <Hero />

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#245436] mb-6">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ReviewCard name="Alice" review="Fantastic service!" />
          <ReviewCard name="James" review="My lawn has never looked better." />
          <ReviewCard name="Karen" review="Reliable and professional team." />
        </div>

        {/* Social buttons */}
        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            ⭐ Google Review
          </button>
          <button className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#145DBF] text-white px-4 py-2 rounded-lg">
            👍 Facebook
          </button>
        </div>
      </section>
    </main>
  );
}
