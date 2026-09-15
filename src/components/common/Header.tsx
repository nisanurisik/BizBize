import { AppContainer } from "@/components/ui/AppContainer";
import { AppLink } from "@/components/ui/AppLink";
import { AppLogo } from "./AppLogo";

const navItems = [
    {
        label: "Ana Sayfa",
        path: "/",
    },
    {
        label: "Nasıl Çalışır?",
        path: "/nasil-calisir",
    },
    {
        label: "Özellikler",
        path: "/ozellikler",
    },
    {
        label: "Hakkımızda",
        path: "/hakkimizda",
    },
] as const;

export function Header() {
    return (
        <header className="relative z-50 border-b border-pink-100/70 bg-white">
            <AppContainer className="flex h-20 items-center justify-between">
                <AppLogo />

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <AppLink
                            key={item.path}
                            to={item.path}
                            variant="nav"
                        >
                            {item.label}
                        </AppLink>
                    ))}
                </nav>

                <AppLink
                    to="/giris"
                    variant="primaryButton"
                >
                    Hemen Başla
                </AppLink>
            </AppContainer>
        </header>
    );
}