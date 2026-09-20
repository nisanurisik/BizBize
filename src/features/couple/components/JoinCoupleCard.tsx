import { useState, type ChangeEvent, type FormEvent } from "react";
import {
    Heart,
    Mail,
} from "lucide-react";

export function JoinCoupleCard() {
    const [code, setCode] = useState("");

    function handleCodeChange(
        event: ChangeEvent<HTMLInputElement>,
    ) {
        const value = event.target.value
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, "")
            .slice(0, 6);

        setCode(value);
    }

    function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        if (code.length !== 6) {
            return;
        }

        // Supabase bağlandığında burada
        // davet koduyla çifte katılma işlemi yapılacak.
        console.log("Girilen davet kodu:", code);
    }

    return (
        <article className="relative flex min-h-full flex-col rounded-[24px] border border-white bg-white/90 p-7 shadow-[0_18px_50px_rgba(67,45,104,0.06)] sm:p-8">
            <div>
                <h2 className="text-[25px] font-extrabold tracking-[-0.03em] text-heading">
                    Davet Kodu ile Katıl
                </h2>

                <p className="mt-3 max-w-[370px] text-[15px] leading-6 text-[#81798d]">
                    Partnerinden aldığın kodu girerek
                    ona bağlanabilirsin.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-7"
                >
                    <input
                        type="text"
                        value={code}
                        onChange={handleCodeChange}
                        placeholder="6 haneli kodu gir"
                        autoComplete="off"
                        spellCheck={false}
                        className="h-[60px] w-full rounded-[14px] border border-[#dfd9e8] bg-[#fdfcff] px-5 text-[17px] font-semibold uppercase tracking-[0.12em] text-heading outline-none transition placeholder:normal-case placeholder:tracking-normal placeholder:text-[#aaa4b5] focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                    <button
                        type="submit"
                        disabled={code.length !== 6}
                        className="mt-4 flex h-[57px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#8a39ed] to-[#6746df] text-[15px] font-bold text-white shadow-[0_12px_26px_rgba(109,70,220,0.2)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                    >
                        Bağlan
                    </button>
                </form>
            </div>

            <div className="mt-auto flex min-h-[170px] items-center justify-center gap-5 pt-9">
                <div className="relative -rotate-12">
                    <div className="flex h-[82px] w-[108px] items-center justify-center rounded-[8px] border border-[#ffd7ce] bg-[#fff1ed] shadow-sm">
                        <Mail
                            size={42}
                            strokeWidth={1.3}
                            className="text-[#f4a18f]"
                        />
                    </div>

                    <Heart
                        size={27}
                        fill="#ef6e8d"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ef6e8d]"
                    />
                </div>

                <div className="-rotate-3">
                    <p className="font-[cursive] text-[22px] font-semibold leading-[1.35] text-[#8466aa]">
                        Doğru insanla,
                        <br />
                        her oyun daha güzel
                    </p>

                    <Heart
                        size={23}
                        className="mx-auto mt-2 text-[#8466aa]"
                    />
                </div>
            </div>
        </article>
    );
}