export default function BookPage() {
  return (
    <main className="bg-[#F9F6F1] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-[#245436] mb-8">
        Book a Free Consultation
      </h1>

      <form className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto space-y-4">
        <label className="block">
          <span className="text-gray-700">Select Services</span>
          <select className="w-full mt-2 p-2 border rounded">
            <option>Garden Care</option>
            <option>Tree & Shrub</option>
            <option>Outdoor Cleaning</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Upload Photo</span>
          <input type="file" className="mt-2" />
        </label>

        <label className="block">
          <span className="text-gray-700">Preferred Date</span>
          <input type="date" className="w-full mt-2 p-2 border rounded" />
        </label>

        <label className="block">
          <span className="text-gray-700">Contact Details</span>
          <input
            type="text"
            placeholder="Your name"
            className="w-full mt-2 p-2 border rounded"
          />
        </label>

        <button className="bg-[#B89D4F] hover:bg-[#a58943] text-white px-4 py-2 rounded-lg">
          Submit Booking
        </button>
      </form>
    </main>
  );
}
