import { useState } from "react";
import ProjectOptions from "../components/onboarding/ProjectOptions";
import InviteTeams from "../components/onboarding/InviteTeams";


const OnboardingFlow = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Project Type", component: <ProjectOptions onNext={() => setStep(1)} /> },
    { title: "Invite Team", component: <InviteTeams onBack={() => setStep(0)} /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Step Indicator */}
      <div className="flex gap-4 mb-8">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === step ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Step Title */}
      <h2 className="text-2xl font-bold mb-6">{steps[step].title}</h2>

      {/* Step Content */}
      <div className="w-full shadow p-6 rounded">
        {steps[step].component}
      </div>
    </div>
  );
}

export default OnboardingFlow