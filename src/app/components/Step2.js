"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schemas/address";
import { useState } from "react";

export default function Step2({ nextStep, prevStep, setFormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(addressSchema),
  });
  const [loading, setloading] = useState(false);

  const onSubmit = (data) => {
    setloading(true)
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  p-4 w-1/2 mx-auto">
      <input {...register("street")} className="border rounded bg-white text-black w-full px-4 py-2"  placeholder="Street Address" />
      <p className="text-red-500">{errors.street?.message}</p>

      <input {...register("city")} className="border rounded bg-white text-black w-full px-4 py-2"  placeholder="City" />
      <p className="text-red-500">{errors.city?.message}</p>

      <input {...register("zipCode")} className="border rounded bg-white text-black w-full px-4 py-2"  placeholder="Zip Code" />
      <p className="text-red-500">{errors.zipCode?.message}</p>

      <div className="flex gap-7">
        <button className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300" type="button" onClick={prevStep}> Previous</button>
        <button className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300" type="submit">Next</button>
      </div>
    </form>
  );
}
