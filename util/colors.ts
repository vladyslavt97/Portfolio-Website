export const themeOptions = [
    {
        id: 1,
        label: "Aurora",
        swatch: "linear-gradient(135deg, #c084fc, #a855f7, #f472b6)",
        background:
            "linear-gradient(140deg, #e3e8ff 0%, #f7f1ff 50%, #ffedf5 100%)",
        overlay: "linear-gradient(180deg, rgba(255,255,255,0.6), transparent)",
        accent: "violet",
    },
    {
        id: 2,
        label: "Solstice",
        swatch: "linear-gradient(135deg, #facc15, #fb923c, #f97316)",
        background:
            "linear-gradient(130deg, #fff5d6 0%, #ffe6a7 40%, #ffd3a4 100%)",
        overlay: "linear-gradient(180deg, rgba(255,248,235,0.7), transparent)",
        accent: "amber",
    },
    {
        id: 3,
        label: "Breeze",
        swatch: "linear-gradient(135deg, #86efac, #4ade80, #22d3ee)",
        background:
            "linear-gradient(140deg, #e8fff4 0%, #d7fbff 40%, #f4fffa 100%)",
        overlay: "linear-gradient(180deg, rgba(216,255,244,0.6), transparent)",
        accent: "emerald",
    },
];

export const normalColors = themeOptions.map((theme) => theme.accent);
