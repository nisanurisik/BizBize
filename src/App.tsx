import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";

import { HomePage } from "@/pages/HomePage";
import { RegisterPage } from "@/pages/RegisterPage";

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;