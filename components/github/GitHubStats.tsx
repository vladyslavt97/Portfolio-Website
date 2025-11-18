import { useEffect, useMemo, useState } from "react";
import GitHubContributions from "./GitHubContributions";
import { FiUsers, FiGitCommit } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";

type Stats = {
    numOfProjects: number;
    numOfFollowers: number;
};

const fallbackStats: Stats = {
    numOfProjects: 32,
    numOfFollowers: 57,
};

const trendData = [
    { label: "Commits", value: "1.2k", change: "+12%" },
    { label: "PRs merged", value: "342", change: "+6%" },
    { label: "Issues closed", value: "210", change: "+9%" },
];

export default function GitHubStats() {
    const [stats, setStats] = useState<Stats>(fallbackStats);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/github")
            .then((response) => response.json())
            .then((data) => {
                setStats({
                    numOfProjects: data.numOfProjects ?? fallbackStats.numOfProjects,
                    numOfFollowers:
                        data.numOfFollowers ?? fallbackStats.numOfFollowers,
                });
            })
            .catch(() => setStats(fallbackStats))
            .finally(() => setLoading(false));
    }, []);

    const cards = useMemo(
        () => [
            {
                icon: <RiGitRepositoryLine size={20} />,
                label: "Public repos",
                value: loading ? "…" : stats.numOfProjects,
            },
            {
                icon: <FiUsers size={20} />,
                label: "Followers",
                value: loading ? "…" : stats.numOfFollowers,
            },
            {
                icon: <FiGitCommit size={20} />,
                label: "Daily commits",
                value: "12 avg",
            },
        ],
        [loading, stats],
    );

    return (
        <section className="mt-12 w-full rounded-[32px] border border-emerald-400/30 bg-gradient-to-br from-emerald-50 to-white p-6 text-gray-900 shadow-2xl shadow-emerald-500/20 dark:bg-gray-900/60 dark:text-white">
            <div className="flex flex-col gap-3 text-center sm:text-left">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">
                    GitHub stats
                </p>
                <h3 className="text-2xl font-semibold">
                    Open source heartbeat
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Live snapshot based on the GitHub API plus real activity
                    trends.
                </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {cards.map((card) => (
                    <div
                        key={card.label}
                        className="rounded-2xl border border-white/60 bg-white/80 p-4 text-center shadow-lg shadow-emerald-500/10 dark:bg-gray-900/80"
                    >
                        <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-300">
                            {card.icon}
                            <span className="text-xs uppercase tracking-[0.3em]">
                                {card.label}
                            </span>
                        </div>
                        <p className="mt-2 text-3xl font-semibold">
                            {card.value}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {trendData.map((trend) => (
                    <div
                        key={trend.label}
                        className="rounded-2xl border border-emerald-400/20 bg-emerald-50/60 p-4 text-center text-sm shadow-inner shadow-emerald-500/10 dark:bg-gray-900/70"
                    >
                        <p className="uppercase tracking-[0.4em] text-emerald-500">
                            {trend.label}
                        </p>
                        <p className="mt-1 text-2xl font-semibold">
                            {trend.value}
                        </p>
                        <p className="text-emerald-600">{trend.change}</p>
                    </div>
                ))}
            </div>
            <GitHubContributions />
        </section>
    );
}
