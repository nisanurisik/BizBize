import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

import { HomePage } from "@/pages/HomePage";
import { RegisterPage } from "@/pages/RegisterPage";
import { LoginPage } from "@/pages/LoginPage";
import { CoupleSetupPage } from "@/pages/CoupleSetupPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route
                        path="/kayit"
                        element={<RegisterPage />}
                    />

                    <Route
                        path="/giris"
                        element={<LoginPage />}
                    />
                </Route>

                <Route element={<DashboardLayout />}>
                    <Route
                        path="/panel"
                        element={<CoupleSetupPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;