"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "../schemas/account";

export default function Step3({ nextStep, prevStep, setFormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("username")} placeholder="Username" />
      <p>{errors.username?.message}</p>

      <input {...register("password")} placeholder="Password" type="password" />
      <p>{errors.password?.message}</p>

      <input {...register("confirmPassword")} placeholder="Confirm Password" type="password" />
      <p>{errors.confirmPassword?.message}</p>

      <div>
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
