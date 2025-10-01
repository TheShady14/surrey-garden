export default function ServicesPage() {
  return (
    <main className="bg-[#F9F6F1] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-[#245436] mb-8">Our Services</h1>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#245436]">
            Garden Care & Maintenance
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Lawn mowing & edging</li>
            <li>Grass care</li>
            <li>Hedge trimming</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#245436]">
            Tree & Shrub Management
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Pruning & felling</li>
            <li>Shrub trimming</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#245436]">
            Outdoor Cleaning
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Pressure washing</li>
            <li>Roof & gutter cleaning</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
