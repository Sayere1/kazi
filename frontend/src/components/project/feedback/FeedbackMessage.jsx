const FeedbackMessage = ({ avatar, name, text, time, isClient }) => (
  <div className={`flex gap-3 ${isClient ? "flex-row-reverse" : ""}`}>
    <div
      className="size-8 rounded-full bg-center bg-cover shrink-0"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>

    <div
      className={`p-3 text-sm rounded-xl ${
        isClient
          ? "bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-tl-xl"
          : "bg-[#f0f2f4] dark:bg-white/5 rounded-tr-xl"
      }`}
    >
      <p className={`font-bold text-xs mb-1 ${isClient ? "text-primary" : ""}`}>
        {name}
      </p>
      <p className="text-[#111418] dark:text-gray-200">{text}</p>
      <p className={`text-[10px] text-[#617589] mt-2 ${isClient ? "text-right" : ""}`}>
        {time}
      </p>
    </div>
  </div>
);

export default FeedbackMessage