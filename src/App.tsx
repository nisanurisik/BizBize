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
import { DashboardHomePage } from "@/pages/DashboardHomePage";
import { GamesPage } from "@/pages/GamesPage";
import { GameQuestionPage } from "@/pages/GameQuestionPage";
import { GameResultPage } from "@/pages/GameResultPage";
import { ProfilePage } from "@/pages/ProfilePage";

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
                        element={<DashboardHomePage />}
                    />

                    <Route
                        path="/eslesme"
                        element={<CoupleSetupPage />}
                    />

                    <Route
                        path="/oyunlar"
                        element={<GamesPage />}
                    />

                    <Route
                        path="/oyunlar/birbirimizi-taniyalim"
                        element={<GameQuestionPage />}
                    />

                    <Route
                        path="/oyunlar/sonuc"
                        element={<GameResultPage />}
                    />

                    <Route
                        path="/profil"
                        element={<ProfilePage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;