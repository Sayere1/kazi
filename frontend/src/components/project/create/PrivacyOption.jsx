const PrivacyOption = ({ title, description }) => (
  <label className="group cursor-pointer">
    <input type="radio" name="privacy" className="hidden peer" />

    <div className="flex flex-col gap-1 p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800
     peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[#111418] dark:text-white">{title}</p>

        <div className="size-5 rounded-full border-2 border-slate-300 dark:border-slate-600
         peer-checked:border-primary flex items-center justify-center">
          <div className="size-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100"></div>
        </div>
      </div>

      <p className="text-xs text-[#617589] dark:text-slate-400">{description}</p>
    </div>
  </label>
);

export default PrivacyOption
