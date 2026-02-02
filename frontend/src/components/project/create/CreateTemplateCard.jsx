
const CreateTemplateCard = ({ icon, title, description, template, active, onSelect, recommended }) => (
  <div
    onClick={() => onSelect(template)}
    className={`relative flex flex-col p-5 rounded-xl border-2 cursor-pointer transition-all ${
      active
        ? "border-primary bg-primary/5 shadow-md"
        : "border-[#dbe0e6] dark:border-[#2d394a] hover:border-primary/50"
    }`}
  >
    {recommended && (
      <div className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1
       rounded uppercase tracking-wider">
        Recommended
      </div>
    )}

    <div className="mb-4 text-primary">{icon}</div>

    <h3 className="text-lg font-bold mb-2">{title}</h3>

    <p className="text-sm text-[#617589] dark:text-[#a0acb9]">{description}</p>
  </div>
);

export default CreateTemplateCard