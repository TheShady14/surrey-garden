export default function ShowcasePage() {
  return (
    <main className="bg-[#F9F6F1] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-[#245436] mb-8">Showcase</h1>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            Before
          </div>
          <div className="h-48 bg-green-300 flex items-center justify-center">
            After
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            Before
          </div>
          <div className="h-48 bg-green-300 flex items-center justify-center">
            After
          </div>
        </div>
      </section>
    </main>
  );
}
