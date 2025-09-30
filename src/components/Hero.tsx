export default function Hero() {
  return (
    <section className="bg-green-700 text-white rounded-2xl p-10 text-center shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Surrey Garden Services</h1>
      <p className="text-lg mb-6">
        Professional landscaping & maintenance, tailored to your needs.
      </p>
      <a
        href="/book"
        className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
      >
        Book a Free Consultation
      </a>
    </section>
  );
}
