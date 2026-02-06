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



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
            </Route>

                        <Route path="workflow" element={<BoardLayout />}>
                <Route index element={<TaskBoardPage />} />
                <Route path="idea" element={<KaziIdeaPage />} />
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


                <Route element={<ProjectLayout />}>
                    <Route index element={<ProjectOverview />} />
                </Route>

            </Route>
        </Routes>
    )
}

export default AppRoutes
