"use client";

import { useForm } from "react-hook-form";

type BookingFormData = {
  name: string;
  email: string;
  services: string[];
  date: string;
  photo?: FileList;
};

export default function BookingForm() {
  const { register, handleSubmit } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "photo" && value instanceof FileList) {
        formData.append("photo", value[0]);
      } else {
        formData.append(key, value as string);
      }
    });

    await fetch("/api/bookings", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-lg space-y-4"
    >
      <input
        {...register("name")}
        placeholder="Your Name"
        className="w-full p-2 border rounded"
      />
      <input
        {...register("email")}
        placeholder="Your Email"
        className="w-full p-2 border rounded"
      />
      <label>Select Services:</label>
      <div className="space-y-2">
        <label>
          <input
            type="checkbox"
            value="Lawn Mowing"
            {...register("services")}
          />{" "}
          Lawn Mowing
        </label>
        <label>
          <input
            type="checkbox"
            value="Hedge Trimming"
            {...register("services")}
          />{" "}
          Hedge Trimming
        </label>
        <label>
          <input
            type="checkbox"
            value="Pressure Washing"
            {...register("services")}
          />{" "}
          Pressure Washing
        </label>
      </div>
      <input
        type="date"
        {...register("date")}
        className="w-full p-2 border rounded"
      />
      <input type="file" {...register("photo")} className="w-full" />
      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Submit Booking
      </button>
    </form>
  );
}
