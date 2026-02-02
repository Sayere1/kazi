const StepIndicator = ({ step, current, label }) => {
  const active = step === current;

  return (
    <div className={`flex items-center gap-2 ${active ? "text-primary" : "text-slate-500"}`}>
      <span
        className={`size-6 flex items-center justify-center rounded-full border 
          ${active ? "border-primary text-primary" : "border-slate-400"}`}
      >
        {step}
      </span>
      <span>{label}</span>
    </div>
  );
};


export default StepIndicator

