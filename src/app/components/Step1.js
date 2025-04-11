"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../schemas/persionalnfo";

export default function Step1({ nextStep, setFormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  p-4 md:w-1/2 mx-auto">
      <input className="border rounded bg-white text-black w-full px-4 py-2"  {...register("fullName")} placeholder="Full Name" />
      <p className="text-red-500">{errors.fullName?.message}</p>

      <input {...register("email")} className="border rounded bg-white text-black w-full px-4 py-2"  placeholder="Email" />
      <p className="text-red-500">{errors.email?.message}</p>

      <input {...register("phone") } className="border rounded bg-white text-black w-full px-4 py-2"  placeholder="Phone Number" />
      <p className="text-red-500">{errors.phone?.message}</p>

      <button className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300 w-full" type="submit">Next</button>
    </form>
  );
}
