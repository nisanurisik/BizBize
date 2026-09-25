import { Link } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";
import { AppLogo } from "./AppLogo";

const menuItems = [
    {
        label: "Ana Sayfa",
        active: true,
    },
    {
        label: "Nasıl Çalışır?",
        active: false,
    },
    {
        label: "Özellikler",
        active: false,
    },
    {
        label: "SSS",
        active: false,
    },
] as const;

export function Header() {
    return (
        <header className="relative z-50 shrink-0 bg-white">
            <AppContainer className="grid h-[84px] grid-cols-[auto_1fr_auto] items-center gap-6">
                <AppLogo />

                <nav className="hidden items-center justify-center gap-10 lg:flex xl:gap-14">
                    {menuItems.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            className={
                                item.active
                                    ? `
                                      relative
                                      pb-4
                                      text-[18px]
                                      font-semibold
                                      text-[#17124e]
                                      after:absolute
                                      after:bottom-0
                                      after:left-1/2
                                      after:h-[4px]
                                      after:w-[110px]
                                      after:-translate-x-1/2
                                      after:rounded-full
                                      after:bg-gradient-to-r
                                      after:from-[#d24de9]
                                      after:to-[#7a4ef7]
                                    `
                                    : `
                                      pb-4
                                      text-[18px]
                                      font-medium
                                      text-[#211a55]
                                      transition
                                      hover:text-[#6d4aff]
                                    `
                            }
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        to="/giris"
                        className="
                            hidden
                            items-center
                            justify-center
                            rounded-[18px]
                            border
                            border-[#dfd9f0]
                            bg-white
                            px-5
                            py-3
                            text-[14px]
                            font-semibold
                            text-[#17134b]
                            transition
                            hover:border-[#c8c1e8]
                            hover:bg-[#faf9ff]
                            sm:inline-flex
                        "
                    >
                        Giriş Yap
                    </Link>

                    <Link
                        to="/kayit"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-[18px]
                            bg-gradient-to-r
                            from-[#6b49f4]
                            to-[#7a4ff5]
                            px-5
                            py-3
                            text-[15px]
                            font-semibold
                            !text-white
                            shadow-[0_14px_28px_rgba(109,74,255,0.18)]
                            transition
                            hover:-translate-y-0.5
                            hover:shadow-[0_18px_32px_rgba(109,74,255,0.25)]
                        "
                    >
                        Kayıt Ol
                    </Link>
                </div>
            </AppContainer>
        </header>
    );
}