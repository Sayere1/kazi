import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/LoginPage"
import MainLayout from "../layout/MainLayout"
import ProtectedRoutes from "./ProtectedRoute"
import OnboardingLayout from "../layout/OnboardingLayout";
import OnboardingFlow from "../auth/OnboardingFlow";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardPage from "../page/dashboard/DashboardPage";
import ProjectLayout from "../layout/ProjectLayout";
import ProjectOverview from "../page/project/ProjectOverview";
import ManageProject from "../page/project/ManageProject";
import CreateProjectPage from "../page/project/CreateProjectPage";
import ProjectDetailsPage from "../page/project/ProjectDetailsPage";
import ProjectFeedbackPage from "../page/project/ProjectFeedbackPage";
import TaskBoardPage from "../page/taskboard/TaskBoardPage";
import BoardLayout from "../layout/BoardLayout";
import KaziIdeaPage from "../page/taskboard/KaziIdeaPage";
import TeamLayout from "../layout/TeamLayout";
import TeamOverview from "../page/team/TeamOverview";
import TeamList from "../page/team/TeamList";
import IDTeam from "../page/team/IDTeam";
import TeamDashboardLayout from "../layout/TeamDashboardLayout";
import TMOverview from "../page/teamdashboard/TMOverview";
import TeamTaskPage from "../page/teamdashboard/TeamTaskPage";
import MyWorkPage from "../page/teamdashboard/MyWork";
import CommunicationLayout from "../layout/CommunicationLayout";
import CommunicationPage from "../page/communication/CommunicationPage";





const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
            </Route>

                    <Route path="comchats" element={<CommunicationLayout />}>
          <Route index element={<CommunicationPage />} />
        </Route>

            {/*Protected routes */}
            <Route
                path="/"
                element={
                    <ProtectedRoutes>
                        <MainLayout />
                    </ProtectedRoutes>
                }>

                <Route path="onboarding" element={<OnboardingLayout />}>
                    <Route index element={<OnboardingFlow />} />
                </Route>

                <Route element={<DashboardLayout />}>
                    <Route index element={<DashboardPage />} />
                </Route>

                <Route path="projects" element={<ProjectLayout />}>
                    <Route index element={<ProjectOverview />} />
                    <Route path="list" element={<ManageProject />} />
                    <Route path="create" element={<CreateProjectPage />} />
                    <Route path=":projectId" element={<ProjectDetailsPage />} />
                    <Route path="/projects/:projectId/feedback" element={<ProjectFeedbackPage />} />
                </Route>

                <Route path="workflow" element={<BoardLayout />}>
                    <Route index element={<TaskBoardPage />} />
                    <Route path="idea" element={<KaziIdeaPage />} />
                </Route>

                <Route path="teams" element={<TeamLayout />}>
                    <Route index element={<TeamOverview />} />
                    <Route path="team-list" element={<TeamList />} />
                    <Route path=":team-Id" element={<IDTeam />} />
                </Route>

                            <Route path="teamwork" element={<TeamDashboardLayout />}>
                <Route index element={<TMOverview />} />
                <Route path="tmtask" element={<TeamTaskPage />} />
                <Route path="tmwork" element={<MyWorkPage />} />
            </Route>

            </Route>
        </Routes>
    )
}

export default AppRoutes
