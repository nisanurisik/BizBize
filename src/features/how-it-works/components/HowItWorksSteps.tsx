import { Copy, Heart } from "lucide-react";

import stepRegister from "@/assets/images/how-it-works/step-register.png";
import stepPartner from "@/assets/images/how-it-works/step-partner.png";
import stepPlay from "@/assets/images/how-it-works/step-play.png";

import { AppContainer } from "@/components/ui/AppContainer";

const steps = [
    {
        number: 1,
        title: "Hesap Oluştur",
        description: (
            <>
                Kısa bir kayıt işlemi ile
                <br />
                hemen hesabını oluştur.
            </>
        ),
        background: "bg-[#fff1f5]",
        numberBackground: "bg-[#ffc8dc]",
        numberColor: "text-[#c53f78]",
        content: (
            <img
                src={stepRegister}
                alt=""
                className="mx-auto h-[180px] object-contain"
            />
        ),
    },
    {
        number: 2,
        title: "Partnerine Kodu Ver",
        description: (
            <>
                Sistemin sana oluşturduğu
                <br />
                özel kodu partnerinle paylaş.
            </>
        ),
        background: "bg-[#f4efff]",
        numberBackground: "bg-[#d8c9ff]",
        numberColor: "text-[#3121a3]",
        content: (
            <div className="flex h-[180px] items-center justify-center">
                <div
                    className="
                        w-[230px]
                        -rotate-[3deg]
                        rounded-[20px]
                        bg-white
                        px-6
                        py-6
                        shadow-[0_16px_40px_rgba(109,74,255,0.08)]
                    "
                >
                    <p className="text-center text-[13px] font-semibold text-[#1d1854]">
                        Sana Özel Kod
                    </p>

                    <div
                        className="
                            mt-3
                            flex
                            items-center
                            overflow-hidden
                            rounded-xl
                            border-4
                            border-[#f1eeff]
                            bg-white
                        "
                    >
                        <span
                            className="
                                flex-1
                                py-2
                                text-center
                                text-[22px]
                                font-black
                                tracking-[0.08em]
                                text-[#09064f]
                            "
                        >
                            A7K3L9
                        </span>

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                bg-[#6d4aff]
                            "
                        >
                            <Copy
                                size={19}
                                className="text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: 3,
        title: "Partnerin Kodu Girsin",
        description: (
            <>
                Partnerin, aldığı kodu kendi
                <br />
                hesabında ilgili alana girerek
                <br />
                sana bağlansın.
            </>
        ),
        background: "bg-[#fff7eb]",
        numberBackground: "bg-[#ffe0ae]",
        numberColor: "text-[#db7900]",
        content: (
            <div className="relative">
                <img
                    src={stepPartner}
                    alt=""
                    className="mx-auto h-[180px] object-contain"
                />

                <div
                    className="
                        absolute
                        left-[18%]
                        top-[15%]
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#ff6a93]
                        bg-white
                    "
                >
                    <Heart
                        size={22}
                        fill="currentColor"
                        strokeWidth={0}
                        className="text-[#ff6a93]"
                    />
                </div>
            </div>
        ),
    },
    {
        number: 4,
        title: "Oyunlara Başlayın",
        description: (
            <>
                Artık hazırsınız!
                <br />
                Eğlenceli sorular ve oyunlarla
                <br />
                birbirinizi daha iyi keşfedin.
            </>
        ),
        background: "bg-[#fff0f5]",
        numberBackground: "bg-[#ffc5dc]",
        numberColor: "text-[#c84078]",
        content: (
            <img
                src={stepPlay}
                alt=""
                className="mx-auto h-[180px] object-contain"
            />
        ),
    },
];

export function HowItWorksSteps() {
    return (
        <section className="bg-white py-5 lg:py-7">
            <AppContainer>
                {/* başlık */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-5">
                        <span
                            className="
                                hidden
                                rotate-[-18deg]
                                text-[34px]
                                font-black
                                text-[#ff6ca5]
                                md:block
                            "
                        >
                            〃
                        </span>

                        <h2
                            className="
                                text-[clamp(30px,3.2vw,44px)]
                                font-black
                                tracking-[-0.045em]
                                text-[#080650]
                            "
                        >
                            4 Adımda{" "}
                            <span
                                className="
                                    bg-gradient-to-r
                                    from-[#754fff]
                                    to-[#5f44eb]
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Başlayın
                            </span>
                        </h2>

                        <Heart
                            className="
                                hidden
                                h-8
                                w-8
                                rotate-[15deg]
                                text-[#ff6ca5]
                                md:block
                            "
                            strokeWidth={2.5}
                        />
                    </div>

                    <p className="mt-2 text-[16px] text-[#4c4771]">
                        Partnerinizle birkaç adımda bağlantı kurun ve eğlenceli
                        oyunlara hemen başlayın.
                    </p>
                </div>

                {/* kartlar */}
                <div
                    className="
                        relative
                        mt-6
                        grid
                        gap-5
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`
                                relative
                                min-h-[325px]
                                overflow-visible
                                rounded-[20px]
                                px-5
                                pb-7
                                pt-4
                                ${step.background}
                            `}
                        >
                            <div
                                className={`
                                    absolute
                                    left-5
                                    top-4
                                    z-20
                                    flex
                                    h-[52px]
                                    w-[52px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[24px]
                                    font-black
                                    ${step.numberBackground}
                                    ${step.numberColor}
                                `}
                            >
                                {step.number}
                            </div>

                            <div>{step.content}</div>

                            <div className="mt-2 text-center">
                                <h3
                                    className="
                                        text-[20px]
                                        font-black
                                        tracking-[-0.03em]
                                        text-[#09064f]
                                    "
                                >
                                    {step.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-[15px]
                                        leading-[1.5]
                                        text-[#504b73]
                                    "
                                >
                                    {step.description}
                                </p>
                            </div>

                            {/* ok */}
                            {index < steps.length - 1 && (
                                <div
                                    className="
                                        absolute
                                        -right-[34px]
                                        top-[43%]
                                        z-30
                                        hidden
                                        w-[47px]
                                        border-t-2
                                        border-dashed
                                        border-[#7854ff]
                                        xl:block
                                    "
                                >
                                    <div
                                        className="
                                            absolute
                                            -right-1
                                            -top-[5px]
                                            h-[9px]
                                            w-[9px]
                                            rotate-45
                                            border-r-2
                                            border-t-2
                                            border-[#7854ff]
                                        "
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </AppContainer>
        </section>
    );
}