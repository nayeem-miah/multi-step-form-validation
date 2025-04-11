"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "../schemas/account";
import { useState } from "react";

export default function Step3({ nextStep, prevStep, setFormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(accountSchema),
  });
  const [loading, setloading] = useState(false);

  const onSubmit = (data) => {
    setloading(true);
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  p-4 w-1/2 mx-auto">
      <input className="border rounded bg-white text-black w-full px-4 py-2"  {...register("username")} placeholder="Username" />
      <p className="text-red-500">{errors.username?.message}</p>

      <input className="border rounded bg-white text-black w-full px-4 py-2"  {...register("password")} placeholder="Password" type="password" />
      <p className="text-red-500">{errors.password?.message}</p>

      <input className="border rounded bg-white text-black w-full px-4 py-2"  {...register("confirmPassword")} placeholder="Confirm Password" type="password" />
      <p className="text-red-500">{errors.confirmPassword?.message}</p>

      <div className="flex gap-8">
        <button className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300" type="button" onClick={prevStep}>{loading ? "loading" : "Previous"}</button>
        <button className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300" type="submit">{loading ? "loading" : "Next"}</button>
      </div>
    </form>
  );
}
