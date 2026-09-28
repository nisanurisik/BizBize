import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";

import { HomePage } from "@/pages/HomePage";
import { HowItWorksPage } from "@/pages/HowItWorksPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { LoginPage } from "@/pages/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ana site */}
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/nasil-calisir"
                        element={<HowItWorksPage />}
                    />
                </Route>

                {/* Giriş / Kayıt */}
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;