import { Outlet } from "react-router-dom";

import { Header } from "@/components/common/Header";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-page">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
}