const CreateMemberRow = ({ name, role, avatar }) => (
  <div className="flex items-center justify-between p-3 rounded-lg border border-slate-50 dark:border-slate-800
   hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
    <div className="flex items-center gap-3">
      <div
        className="size-10 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>

      <div>
        <p className="font-bold text-[#111418] dark:text-white">{name}</p>
        <p className="text-xs text-[#617589]">{role}</p>
      </div>
    </div>

    <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg 
    text-sm font-bold transition-all">
      Add
    </button>
  </div>
);

export default CreateMemberRow