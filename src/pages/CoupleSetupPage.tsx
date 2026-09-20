import { Heart } from "lucide-react";

import { AppContainer } from "@/components/ui/AppContainer";
import { InvitePartnerCard } from "@/features/couple/components/InvitePartnerCard";
import { JoinCoupleCard } from "@/features/couple/components/JoinCoupleCard";

export function CoupleSetupPage() {
    return (
        <section className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#fcf9ff_48%,#f5efff_100%)] py-10 sm:py-14">
            <div className="pointer-events-none absolute left-[-160px] top-20 h-[380px] w-[380px] rounded-full bg-purple-200/20 blur-[90px]" />

            <div className="pointer-events-none absolute bottom-[-160px] right-[-130px] h-[400px] w-[400px] rounded-full bg-pink-200/25 blur-[100px]" />

            <AppContainer className="relative">
                <div className="grid items-stretch gap-7 lg:grid-cols-2">
                    <InvitePartnerCard />

                    <JoinCoupleCard />
                </div>

                <div className="pointer-events-none relative hidden h-[80px] lg:block">
                    <Heart
                        size={29}
                        strokeWidth={1.8}
                        className="absolute left-[29%] top-7 -rotate-12 text-[#f278a5]"
                    />

                    <div className="absolute left-[34%] top-2 h-[55px] w-[145px] rotate-[8deg] rounded-[50%] border-b-2 border-dashed border-[#ef87aa]" />

                    <span className="absolute left-[46%] top-1 rotate-[18deg] text-[31px] text-[#ef87aa]">
                        ↑
                    </span>
                </div>
            </AppContainer>
        </section>
    );
}