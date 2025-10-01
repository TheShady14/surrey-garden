export default function BlogPage() {
  return (
    <main className="bg-[#F9F6F1] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-[#245436] mb-8">Blog</h1>

      <section className="grid md:grid-cols-3 gap-6">
        <article className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#245436]">
            Seasonal Garden Maintenance
          </h2>
          <p className="mt-3 text-gray-700">
            Tips for keeping Surrey gardens healthy year-round...
          </p>
        </article>
        <article className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#245436]">
            Hedge Trimming Benefits
          </h2>
          <p className="mt-3 text-gray-700">
            Why proper hedge care matters for your garden...
          </p>
        </article>
        <article className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#245436]">
            Pet-Friendly Gardening
          </h2>
          <p className="mt-3 text-gray-700">
            Safe garden tips for homes with furry friends...
          </p>
        </article>
      </section>
    </main>
  );
}
