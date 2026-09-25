import { Heart } from "lucide-react";

import coupleHeroImage from "@/assets/images/home/couple-hero.png";

import { AppContainer } from "@/components/ui/AppContainer";
import { AppLink } from "@/components/ui/AppLink";
import { AppText } from "@/components/ui/AppText";

export function HomeHero() {
    return (
        <section className="relative h-[calc(100vh-88px)] min-h-0 overflow-hidden bg-page">
            <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />

            <div className="absolute right-[-80px] top-10 h-80 w-80 rounded-full bg-violet-200/20 blur-3xl" />

            <AppContainer className="relative grid h-full min-h-0 items-center gap-8 py-6 lg:grid-cols-2 lg:py-4">
                <div className="relative z-10 max-w-2xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                        <Heart
                            size={17}
                            fill="currentColor"
                        />

                        Sadece ikinize özel
                    </div>

                    <AppText
                        as="h1"
                        variant="hero"
                    >
                        Birbirinizi daha

                        <span className="block text-primary">
                            iyi keşfedin
                        </span>
                    </AppText>

                    <AppText className="mt-6 max-w-xl">
                        Eğlenceli sorular, küçük meydan okumalar ve birlikte
                        geçirdiğiniz zamanı daha keyifli hale getiren çift
                        oyunlarıyla birbirinizi yeniden keşfedin.
                    </AppText>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <AppLink
                            to="/kayit"
                            variant="primaryButton"
                        >
                            Hemen Başla
                        </AppLink>
                    </div>

                    <div className="mt-9 -rotate-6 text-secondary">
                        <p className="font-medium italic">
                            Birbirinizi ne kadar
                        </p>

                        <p className="font-medium italic">
                            iyi tanıyorsunuz? ♡
                        </p>
                    </div>
                </div>

                <div className="relative flex items-end justify-center self-end lg:justify-end">
                    <div className="absolute left-0 top-16 rotate-[-9deg] text-center text-primary/70 lg:left-8">
                        <p className="text-lg font-medium italic">
                            Aynı cevap mı?
                        </p>

                        <p className="text-lg font-medium italic">
                            Yoksa sürpriz mi?
                        </p>

                        <span className="mt-2 block text-2xl">
                            ♡
                        </span>
                    </div>

                    <div className="absolute right-4 top-14 text-secondary/50">
                        <Heart
                            size={26}
                            strokeWidth={1.5}
                        />
                    </div>

                    <img
                        src={coupleHeroImage}
                        alt="Birlikte oyun oynayan çift"
                        className="relative z-10 max-h-[calc(100vh-125px)] w-full max-w-[590px] object-contain lg:max-w-[610px]"
                    />

                    <div className="absolute bottom-[-160px] right-[-100px] h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
                </div>
            </AppContainer>
        </section>
    );
}