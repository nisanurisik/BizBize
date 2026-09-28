import { Heart } from "lucide-react";

import howItWorksHero from "@/assets/images/how-it-works/how-it-works-hero.png";

import { AppContainer } from "@/components/ui/AppContainer";

export function HowItWorksHero() {
    return (
        <section className="relative overflow-hidden bg-white">
            <AppContainer>
                <div
                    className="
                        relative
                        min-h-[310px]
                        overflow-hidden
                        rounded-b-[48px]
                        bg-gradient-to-r
                        from-[#fffaff]
                        via-white
                        to-[#f9f5ff]
                        px-6
                        py-10
                        lg:min-h-[330px]
                        lg:px-10
                    "
                >
                    {/* arka plan dekorları */}
                    <div className="pointer-events-none absolute inset-0">
                        <div
                            className="
                                absolute
                                right-[7%]
                                top-[5%]
                                h-[260px]
                                w-[520px]
                                rotate-[-8deg]
                                rounded-[50%]
                                bg-[#f8f1ff]/80
                                blur-[2px]
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-[-80px]
                                right-[8%]
                                h-[190px]
                                w-[460px]
                                rounded-[50%]
                                bg-[#fff0f6]
                            "
                        />
                    </div>

                    <div
                        className="
                            relative
                            z-10
                            grid
                            min-h-[250px]
                            items-center
                            gap-8
                            lg:grid-cols-[42%_58%]
                        "
                    >
                        {/* SOL */}
                        <div className="relative text-center lg:text-left">
                            {/* sol el yazısı */}
                            <div
                                className="
                                    absolute
                                    -left-2
                                    -top-6
                                    hidden
                                    -rotate-[8deg]
                                    text-[17px]
                                    leading-[1.15]
                                    text-[#7553ef]
                                    xl:block
                                "
                                style={{
                                    fontFamily:
                                        '"Segoe Print", "Comic Sans MS", cursive',
                                }}
                            >
                                <p>Sadece</p>
                                <p>siz ikiniz için</p>
                                <p>özel bir deneyim</p>

                                <Heart
                                    className="ml-14 mt-1 h-6 w-6"
                                    strokeWidth={2}
                                />

                                <div
                                    className="
                                        ml-16
                                        mt-3
                                        h-[36px]
                                        w-[82px]
                                        rounded-bl-full
                                        border-b-2
                                        border-l-2
                                        border-[#7553ef]
                                    "
                                />
                            </div>

                            <div className="lg:pl-24 xl:pl-36">
                                <h1
                                    className="
                                        text-[clamp(44px,5vw,72px)]
                                        font-black
                                        leading-none
                                        tracking-[-0.055em]
                                        text-[#09064f]
                                    "
                                >
                                    Nasıl{" "}
                                    <span
                                        className="
                                            bg-gradient-to-r
                                            from-[#7654ff]
                                            to-[#5d42ea]
                                            bg-clip-text
                                            text-transparent
                                        "
                                    >
                                        Çalışır?
                                    </span>
                                </h1>

                                <p
                                    className="
                                        mx-auto
                                        mt-6
                                        max-w-[500px]
                                        text-[16px]
                                        leading-[1.6]
                                        text-[#302b61]
                                        lg:mx-0
                                        lg:text-[18px]
                                    "
                                >
                                    BizBize’ye katılın, partnerinizle bağlanın ve
                                    sadece size özel oyunlarla birbirinizi daha iyi
                                    keşfedin.
                                    <br />
                                    Adımlar çok kolay!
                                </p>

                                <div
                                    className="
                                        mx-auto
                                        mt-2
                                        h-[3px]
                                        w-[58px]
                                        rotate-[-5deg]
                                        rounded-full
                                        bg-[#ff6ca6]
                                        lg:mx-0
                                        lg:ml-[260px]
                                    "
                                />
                            </div>
                        </div>

                        {/* SAĞ */}
                        <div className="relative flex h-full items-end justify-center">
                            {/* dekoratif kalpler */}
                            <Heart
                                className="
                                    absolute
                                    left-[24%]
                                    top-[8%]
                                    h-7
                                    w-7
                                    rotate-[-15deg]
                                    text-[#ff6ba8]
                                "
                                strokeWidth={2.5}
                            />

                            <Heart
                                className="
                                    absolute
                                    left-[30%]
                                    top-[12%]
                                    h-6
                                    w-6
                                    rotate-[12deg]
                                    text-[#ff6ba8]
                                "
                                strokeWidth={2.5}
                            />

                            <img
                                src={howItWorksHero}
                                alt="Birbirine bakan çift"
                                className="
                                    relative
                                    z-10
                                    max-h-[270px]
                                    w-auto
                                    object-contain
                                    object-bottom
                                    lg:max-h-[310px]
                                "
                            />

                            {/* sağ yazı */}
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-[28%]
                                    hidden
                                    rotate-[5deg]
                                    text-[17px]
                                    leading-[1.15]
                                    text-[#7553ef]
                                    xl:block
                                "
                                style={{
                                    fontFamily:
                                        '"Segoe Print", "Comic Sans MS", cursive',
                                }}
                            >
                                <p>Daha iyi</p>
                                <p>sohbetler,</p>
                                <p>daha güçlü</p>
                                <p>biz ♡</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}