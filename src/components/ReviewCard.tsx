type ReviewCardProps = {
  name: string;
  review: string;
};

export default function ReviewCard({ name, review }: ReviewCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <p className="italic text-gray-700">“{review}”</p>
      <p className="mt-2 font-semibold text-gray-900">- {name}</p>
    </div>
  );
}
