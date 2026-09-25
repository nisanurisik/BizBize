import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";
import { AppLogo } from "@/components/common/AppLogo";

const navItems = [
    {
        label: "Ana Sayfa",
        path: "/panel",
    },
    {
        label: "Oyunlar",
        path: "/oyunlar",
    },
    {
        label: "İstatistikler",
        path: "/istatistikler",
    },
    {
        label: "Profil",
        path: "/profil",
    },
] as const;

export function DashboardHeader() {
    return (
        <header className="relative z-50 border-b border-[#eee9f4] bg-white/95 backdrop-blur">
            <AppContainer className="flex h-[74px] items-center justify-between">
                <AppLogo />

                <nav className="hidden items-center gap-9 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                [
                                    "relative flex h-[74px] items-center text-[14px] font-semibold transition",
                                    isActive
                                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-primary"
                                        : "text-[#625b72] hover:text-primary",
                                ].join(" ")
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    type="button"
                    className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#e9e4ef] bg-white px-4 text-[13px] font-semibold text-[#655e72] shadow-sm transition hover:border-primary/30 hover:text-primary"
                >
                    <LogOut size={16} />
                    <span className="hidden sm:inline">Çıkış Yap</span>
                </button>
            </AppContainer>
        </header>
    );
}