import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function AppLogo() {
    return (
        <Link
            to="/"
            className="inline-flex items-center gap-2"
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Heart
                    size={18}
                    fill="currentColor"
                />
            </span>

            <span className="text-xl font-extrabold tracking-tight text-heading">
                BizBize
            </span>
        </Link>
    );
}