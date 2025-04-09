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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("fullName")} placeholder="Full Name" />
      <p>{errors.fullName?.message}</p>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input {...register("phone")} placeholder="Phone Number" />
      <p>{errors.phone?.message}</p>

      <button type="submit">Next</button>
    </form>
  );
}
