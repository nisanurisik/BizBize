import { useState, type FormEvent } from "react";
import {
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Supabase bağlantısını daha sonra burada yapacağız.
    }

    return (
        <div className="w-full max-w-[470px] rounded-[28px] border border-white/80 bg-white/80 px-8 py-8 shadow-[0_20px_70px_rgba(77,46,122,0.08)] backdrop-blur-sm sm:px-10">
            <div className="mb-7 text-center">
                <h1 className="text-[29px] font-extrabold tracking-[-0.03em] text-[#1d1635]">
                    Hesap Oluştur
                </h1>

                <p className="mx-auto mt-2 max-w-[310px] text-[15px] leading-6 text-[#8a8498]">
                    Eğlenceli yolculuğunuza başlamak için
                    <br className="hidden sm:block" />
                    birkaç bilgi yeterli.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <div className="relative">
                    <UserRound
                        size={19}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#76718d]"
                    />

                    <input
                        type="text"
                        name="firstName"
                        placeholder="Adınız"
                        autoComplete="given-name"
                        className="h-[52px] w-full rounded-xl border border-[#e7e3ee] bg-[#fbfaff] pl-12 pr-4 text-[14px] font-medium text-[#211a37] outline-none transition placeholder:text-[#aaa5b7] focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                </div>

                <div className="relative">
                    <UserRound
                        size={19}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#76718d]"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Soyadınız"
                        autoComplete="family-name"
                        className="h-[52px] w-full rounded-xl border border-[#e7e3ee] bg-[#fbfaff] pl-12 pr-4 text-[14px] font-medium text-[#211a37] outline-none transition placeholder:text-[#aaa5b7] focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                </div>

                <div className="relative">
                    <Mail
                        size={19}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#76718d]"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="E-posta adresiniz"
                        autoComplete="email"
                        className="h-[52px] w-full rounded-xl border border-[#e7e3ee] bg-[#fbfaff] pl-12 pr-4 text-[14px] font-medium text-[#211a37] outline-none transition placeholder:text-[#aaa5b7] focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                </div>

                <div className="relative">
                    <LockKeyhole
                        size={19}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#76718d]"
                    />

                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Parola"
                        autoComplete="new-password"
                        className="h-[52px] w-full rounded-xl border border-[#e7e3ee] bg-[#fbfaff] pl-12 pr-12 text-[14px] font-medium text-[#211a37] outline-none transition placeholder:text-[#aaa5b7] focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        aria-label={
                            showPassword
                                ? "Parolayı gizle"
                                : "Parolayı göster"
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaa5b7] transition hover:text-primary"
                    >
                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                </div>

                <button
                    type="submit"
                    className="mt-2 flex h-[53px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#8b3ce7] to-[#6746dc] text-[15px] font-bold text-white shadow-[0_12px_28px_rgba(112,67,218,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(112,67,218,0.28)] active:translate-y-0"
                >
                    Kayıt Ol
                </button>
            </form>

            <p className="mt-6 text-center text-[14px] font-medium text-[#6f687d]">
                Zaten hesabın var mı?{" "}
                <Link
                    to="/giris"
                    className="font-bold text-[#7046d9] underline decoration-[#7046d9]/40 underline-offset-4 transition hover:text-[#572fc3]"
                >
                    Giriş Yap
                </Link>
            </p>
        </div>
    );
}