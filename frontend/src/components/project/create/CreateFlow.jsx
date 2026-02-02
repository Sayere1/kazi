import { MdClose } from "react-icons/md";
import { useProjectStore } from "../../../store/useProjectStore";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const CreateFlow = () => {
  const store = useProjectStore();
  const { createFlowOpen, createStep, createForm } = store;

  if (!createFlowOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-90"
        onClick={store.closeCreateFlow}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-120 bg-white dark:bg-slate-900 
        shadow-2xl border-l border-slate-200 dark:border-slate-700 
        z-100 p-6 flex flex-col gap-6 animate-slideIn">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Create New Project</h2>
          <button
            onClick={store.closeCreateFlow}
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <MdClose className="text-xl" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className={createStep === 1 ? "text-primary" : "text-slate-500"}>1. General</span>
          <span>›</span>
          <span className={createStep === 2 ? "text-primary" : "text-slate-500"}>2. Team</span>
          <span>›</span>
          <span className={createStep === 3 ? "text-primary" : "text-slate-500"}>3. Goals</span>
        </div>

        {/* STEP CONTENT */}
        <div className="flex-1 overflow-y-auto">
          {createStep === 1 && (
            <StepOne store={store} form={createForm} />
          )}

          {createStep === 2 && (
            <StepTwo store={store} form={createForm} />
          )}

          {createStep === 3 && (
            <StepTwo store={store} form={createForm} />
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-auto">
          {createStep > 1 ? (
            <button
              onClick={store.prevStep}
              className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {createStep < 3 ? (
            <button
              onClick={store.nextStep}
              className="px-4 py-2 rounded-lg bg-primary text-white"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => {
                console.log("Submit:", createForm);
                store.closeCreateFlow();
              }}
              className="px-4 py-2 rounded-lg bg-green-600 text-white"
            >
              Create Project
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateFlow;
