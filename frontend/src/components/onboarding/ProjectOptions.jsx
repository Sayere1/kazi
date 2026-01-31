import { useOnboardingStore } from "../../store/useOnboardingStore";
import Logo from "../../assets/images/kazilogo.png";

import {
  FaRocket,
  FaBullhorn,
  FaCode,
  FaCogs,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";

const ProjectOptions = ({ onNext }) => {
  const projectType = useOnboardingStore((s) => s.projectType);
  const setProjectType = useOnboardingStore((s) => s.setProjectType);

  const roles = [
    {
      id: "marketing",
      label: "Marketing",
      description: "Campaigns, creative assets, and performance tracking.",
      icon: <FaBullhorn className="text-3xl" />,
    },
    {
      id: "engineering",
      label: "Engineering",
      description: "Sprints, deployments, code reviews, and bug tracking.",
      icon: <FaCode className="text-3xl" />,
    },
    {
      id: "operations",
      label: "Operations",
      description: "Internal efficiency, HR, and process optimization.",
      icon: <FaCogs className="text-3xl" />,
    },
    {
      id: "sales",
      label: "Sales",
      description: "Pipelines, client CRM, and revenue forecasting.",
      icon: <FaChartLine className="text-3xl" />,
    },
  ];

  const handleNext = () => {
    if (!projectType) return;
    onNext();
  };

    const handleSkip = () => {
    onNext();
  };

  return (
    <div className="min-h-screen w-full">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">

        {/* Navigation Bar */}
   <header className="flex items-center justify-between
        px-4 sm:px-10 pt-0 pb-10">

          <div className="flex items-center">
            <div className="size-8 flex items-center justify-center">
              <img src={Logo} className='w-5 h-5'/>
            </div>
            <h2 className="text-xl font-bold">aziHub</h2>
          </div>

          <button className="text-sm font-medium text-[#618986] hover:text-[#111817] dark:text-[#a0c4c1] dark:hover:text-white transition-colors">
            Need help?
          </button>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 justify-center">
          <div className="flex flex-col w-full max-w-5xl mx-auto">

            {/* Headline */}
            <div className="text-center mb-10 px-4">
              <h1 className="text-[#111817] dark:text-white text-3xl sm:text-4xl font-extrabold pb-4">
                What best describes your project?
              </h1>
              <p className="text-[#618986] dark:text-[#a0c4c1] text-base sm:text-lg px-2 sm:px-12">
                Customizable experience to match your team's unique workflow.
              </p>
            </div>

            {/* Role Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 gap-y-8 px-4">
              {roles.map((role) => {
                const isSelected = projectType === role.id;

                return (
                  <button
                    key={role.id}
                    onClick={() => setProjectType(role.id)}
                    className={`flex flex-col text-left p-5 sm:p-6 rounded-xl shadow-sm transition-all outline-none
                      ${
                        isSelected
                          ? "border-2 border-primary bg-primary/5 dark:bg-[#1e3a37]"
                          : "border-2 border-transparent bg-white dark:bg-[#1a2e2b] hover:shadow-md hover:border-primary/50"
                      }
                    `}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-14 h-14 rounded-lg flex items-center justify-center
                          ${
                            isSelected
                              ? "bg-primary text-white"
                              : "bg-primary/10 text-primary"
                          }
                        `}
                      >
                        {role.icon}
                      </div>

                      {isSelected && (
                        <div className="size-6 bg-primary rounded-full flex items-center justify-center">
                          <FaCheck className="text-xs text-white" />
                        </div>
                      )}
                    </div>

                    <h3 className="text-[#111817] dark:text-white text-lg sm:text-xl font-bold mb-1">
                      {role.label}
                    </h3>
                    <p className="text-[#618986] dark:text-[#a0c4c1] text-sm">
                      {role.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 mt-12 gap-4">
              <button 
              onClick={handleSkip}

              className="px-6 py-3 text-[#618986] dark:text-[#a0c4c1] font-medium hover:bg-[#dbe6e5]/30
               dark:hover:bg-white/5 rounded-lg transition-all w-full sm:w-auto">
                Skip
              </button>

              <button
                onClick={handleNext}
                disabled={!projectType}
                className={`px-10 py-3.5 rounded-xl flex items-center gap-2 font-bold shadow-lg transition-all 
                  w-full sm:w-auto
                  ${
                    projectType
                      ? "bg-primary text-[#102220] hover:bg-[#0fd9c7] hover:scale-[1.02] active:scale-95"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }
                `}
              >
                <span>Next Step</span>
                <FaRocket />
              </button>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}


export default ProjectOptions