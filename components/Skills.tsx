import Image from "next/image";
import skills from "../skills.json";

const categories = [
    {
        title: "Frontend",
        stack: ["React", "Next.js", "Vue", "TailwindCSS"],
    },
    {
        title: "Backend",
        stack: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Tooling",
        stack: ["TypeScript", "Zustand", "Firebase", "Stripe"],
    },
];

export default function Skills() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8" id="skills">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm uppercase tracking-[0.5em] text-teal-500">
                    Capabilities
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
                    Tools I ship with
                </h2>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                    A mix of product-focused front-end chops, battle-tested
                    back-end tools, and the productivity stack I lean on daily.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {categories.map((category) => (
                    <div
                        key={category.title}
                        className="rounded-2xl border border-teal-500/20 bg-white/70 p-6 text-center shadow-lg shadow-teal-500/10 backdrop-blur dark:bg-gray-900/60"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {category.title}
                        </h3>
                        <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            {category.stack.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/70 p-6 shadow-2xl shadow-black/10 backdrop-blur dark:bg-gray-900/70">
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
                    {skills.map((skill, index) => (
                        <div
                            key={`${skill.src}-${index}`}
                            className="flex h-20 items-center justify-center rounded-xl border border-gray-200 bg-white/80 p-3 shadow-sm transition hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800"
                        >
                            <Image
                                src={skill.src}
                                alt="skill"
                                width={skill.width}
                                height={skill.height}
                                className="max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
