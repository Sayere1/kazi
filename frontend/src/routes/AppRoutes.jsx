import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/LoginPage"
import MainLayout from "../layout/MainLayout"
import ProtectedRoutes from "./ProtectedRoute"
import OnboardingLayout from "../layout/OnboardingLayout";
import OnboardingFlow from "../auth/OnboardingFlow";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardPage from "../page/dashboard/DashboardPage";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
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



            </Route>
        </Routes>
    )
}

export default AppRoutes
