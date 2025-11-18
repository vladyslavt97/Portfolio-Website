type SpinnerProps = {
    label?: string;
    className?: string;
};

export default function LoadingSpinner({
    label = "Loading",
    className = "",
}: SpinnerProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-2 text-xs uppercase tracking-[0.5em] text-white/70 ${className}`}
        >
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
            <span>{label}</span>
        </div>
    );
}
