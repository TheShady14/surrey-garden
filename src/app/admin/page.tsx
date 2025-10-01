export default function AdminPage() {
  return (
    <main className="bg-[#F9F6F1] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-[#245436] mb-8">
        Admin Dashboard
      </h1>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">Pending Bookings</h2>
          <p className="mt-2 text-gray-600">No bookings yet.</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">Calendar</h2>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            [Calendar Placeholder]
          </div>
        </div>
      </section>
    </main>
  );
}
