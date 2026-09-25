import { Outlet } from "react-router-dom";

import { Header } from "@/components/common/Header";

export function MainLayout() {
    return (
        <div className="h-screen overflow-hidden bg-white">
            <Header />

            <main className="h-[calc(100vh-84px)] overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
}