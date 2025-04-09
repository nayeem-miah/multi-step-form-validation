"use client";
import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Summary from "./components/Summary";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <div className="py-10">
    {step === 1 && <Step1 nextStep={nextStep} setFormData={setFormData} />}
    {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} />}
    {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} />}
    {step === 4 && <Summary formData={formData} />}
  </div>
  );
}
