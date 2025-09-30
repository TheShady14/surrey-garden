import Hero from "@/components/Hero";
import ReviewCard from "@/components/ReviewCard";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ReviewCard name="Alice" review="Fantastic service!" />
          <ReviewCard name="James" review="My lawn has never looked better." />
          <ReviewCard name="Karen" review="Reliable and professional team." />
        </div>
      </section>
    </div>
  );
}
