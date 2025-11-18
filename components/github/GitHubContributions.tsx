type ContributionDay = {
    date: string;
    count: number;
};

const weeks = 53;
const mobileWeeks = 5;
const daysPerWeek = 7;

const levels = [
    "bg-emerald-100",
    "bg-emerald-200",
    "bg-emerald-300",
    "bg-emerald-400",
    "bg-emerald-500",
];

function generateContributions(): ContributionDay[] {
    const today = new Date();
    const contributions: ContributionDay[] = [];

    for (let week = 0; week < weeks; week++) {
        for (let day = 0; day < daysPerWeek; day++) {
            const offset = week * daysPerWeek + day;
            const date = new Date(today);
            date.setDate(today.getDate() - offset);
            const count = Math.max(
                0,
                Math.round(
                    8 +
                        6 * Math.sin(week / 3) +
                        5 * Math.cos(day / 2) +
                        (Math.random() - 0.5) * 6,
                ),
            );
            contributions.push({
                date: date.toISOString().split("T")[0],
                count,
            });
        }
    }

    return contributions.reverse();
}

const contributions = generateContributions();
const mobileContributions = contributions.slice(
    Math.max(0, contributions.length - mobileWeeks * daysPerWeek),
);

const monthFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
});

function renderGrid(
    data: ContributionDay[],
    startLabel: string,
    endLabel: string,
    className: string,
) {
    const weekCount = Math.ceil(data.length / daysPerWeek);

    return (
        <div
            className={`flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/70 p-4 text-left shadow-inner shadow-emerald-500/10 dark:bg-gray-900/50 ${className}`}
        >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-300">
                <span>{startLabel}</span>
                <span>{endLabel}</span>
            </div>
            <div className="mx-auto flex flex-row justify-center gap-[2px] overflow-x-auto">
                {Array.from({ length: weekCount }).map((_, weekIdx) => {
                    const start = weekIdx * daysPerWeek;
                    const week = data.slice(start, start + daysPerWeek);
                    return (
                        <div
                            key={`${startLabel}-${weekIdx}`}
                            className="flex flex-col gap-[2px]"
                        >
                            {week.map((day) => {
                                const level =
                                    levels[
                                        Math.min(
                                            levels.length - 1,
                                            Math.floor(day.count / 5),
                                        )
                                    ];
                                return (
                                    <div
                                        key={day.date}
                                        className={`h-2.5 w-2.5 rounded-sm transition hover:scale-110 ${level}`}
                                        title={`${day.count} contributions on ${day.date}`}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function GitHubContributions() {
    const today = new Date();
    const start = new Date();
    start.setDate(today.getDate() - weeks * daysPerWeek);
    const startLabel = monthFormatter.format(start);
    const endLabel = monthFormatter.format(today);
    const mobileStart = mobileContributions[0]
        ? monthFormatter.format(new Date(mobileContributions[0].date))
        : startLabel;
    const mobileEnd = monthFormatter.format(today);

    return (
        <>
            {renderGrid(
                contributions,
                startLabel,
                endLabel,
                "hidden sm:flex mt-6",
            )}
            {renderGrid(
                mobileContributions,
                mobileStart,
                mobileEnd,
                "mt-6 sm:hidden",
            )}
            <p className="text-[10px] text-gray-500">
                Generated snapshot of the past 12 months
            </p>
        </>
    );
}
