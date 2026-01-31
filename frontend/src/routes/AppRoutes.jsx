import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/LoginPage"
import MainLayout from "../layout/MainLayout"
import ProtectedRoutes from "./ProtectedRoute"
import OnboardingLayout from "../layout/OnboardingLayout";
import OnboardingFlow from "../auth/OnboardingFlow";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

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

                {/*   <Route element={<DashboardLayout />}>
                    <Route index element={<DashboardPage />} />
                </Route>

                */}

            </Route>
        </Routes>
    )
}

export default AppRoutes





