import PrivacyOption from "./PrivacyOption";
import { MdLock, MdArrowForward,} from "react-icons/md";


const CreatePrivacyCard = ({ store }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100
   dark:border-slate-800 shadow-sm sticky top-6">

    <div className="flex items-center gap-2 mb-6">
      <MdLock className="text-primary text-xl" />
      <h3 className="text-[#111418] dark:text-white text-xl font-bold">
        Privacy Settings
      </h3>
    </div>

    <div className="flex flex-col gap-4">

      {/* PUBLIC */}
      <PrivacyOption
        title="Public"
        description="Visible to everyone in your workspace. Anyone can join and contribute."
      />

      {/* PRIVATE */}
      <PrivacyOption
        title="Private"
        description="Only invited team members can see this project. Ideal for confidential tasks."
      />

      {/* RESTRICTED */}
      <PrivacyOption
        title="Restricted"
        description="Highest security level. Access requires explicit multi-factor authorization."
      />
    </div>

    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
      <button
        onClick={store.nextCreateStep}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg 
        hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
      >
        Continue to Step 3
        <MdArrowForward />
      </button>

      <p className="text-center text-xs text-slate-400 mt-4">
        You can always change these settings later in Project Dashboard.
      </p>
    </div>
  </div>
);

export default CreatePrivacyCard
