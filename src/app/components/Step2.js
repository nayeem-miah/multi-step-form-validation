"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schemas/address";

export default function Step2({ nextStep, prevStep, setFormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("street")} placeholder="Street Address" />
      <p>{errors.street?.message}</p>

      <input {...register("city")} placeholder="City" />
      <p>{errors.city?.message}</p>

      <input {...register("zipCode")} placeholder="Zip Code" />
      <p>{errors.zipCode?.message}</p>

      <div>
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
