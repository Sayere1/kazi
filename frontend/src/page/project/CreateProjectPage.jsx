import StepIndicator from "../../components/project/create/StepIndicator";
import StepOne from "../../components/project/create/StepOne";
import StepThree from "../../components/project/create/StepThree";
import StepTwo from "../../components/project/create/StepTwo";
import { useProjectStore } from "../../store/useProjectStore";
import { MdArrowBack, MdArrowForward, MdCheck } from "react-icons/md";

const CreateProjectPage = () => {
  const store = useProjectStore();
  const { createStep, createForm } = store;

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-black">Create New Project</h1>
        <p className="text-[#617589] dark:text-slate-400">
          Follow the steps to configure your new workspace.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-4 text-sm font-semibold">
        <StepIndicator step={1} current={createStep} label="Details" />
        <StepIndicator step={2} current={createStep} label="Team" />
        <StepIndicator step={3} current={createStep} label="Timeline" />
      </div>

      {/* Step Content */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200
       dark:border-slate-800 shadow-sm">
        {createStep === 1 && <StepOne store={store} form={createForm} />}
        {createStep === 2 && <StepTwo store={store} form={createForm} />}
        {createStep === 3 && <StepThree form={createForm} />}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        {createStep > 1 ? (
          <button
            onClick={store.prevCreateStep}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700"
          >
            <MdArrowBack />
            Back
          </button>
        ) : (
          <div />
        )}

        {createStep < 3 ? (
          <button
            onClick={store.nextCreateStep}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white"
          >
            Next
            <MdArrowForward />
          </button>
        ) : (
          <button
            onClick={() => {
              console.log("Submitting:", createForm);
              store.resetCreateFlow();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white"
          >
            <MdCheck />
            Create Project
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateProjectPage;
