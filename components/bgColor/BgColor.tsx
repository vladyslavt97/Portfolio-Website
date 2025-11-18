import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { bgColorChanger } from "../redux/bgChange";
import { themeOptions } from "@/util/colors";

type Props = {};

export default function BgColor({}: Props) {
    const [opened, setOpened] = useState(false);
    const bgColorRedux = useSelector(
        (state: RootState) => state.bgColor.bgColorValue
    );

    const dispatch = useDispatch();

    const setColor = (num: number) => {
        dispatch(bgColorChanger(num));
        setOpened(false); // Close the modal after selection
    };

    const activeOption =
        themeOptions.find((option) => option.id === bgColorRedux) ??
        themeOptions[0];

    return (
        <div className="hidden md:block md:mx-5 md:my-2 relative">
            <button
                onClick={() => setOpened(!opened)}
                className="rounded-full w-12 h-12 border-2 border-white/70 shadow-lg transition hover:scale-110 focus:outline-none"
                style={{ background: activeOption.swatch }}
                aria-label="Choose site color theme"
            />
            {opened && (
                <div className="z-[999]">
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
                        onClick={() => setOpened(false)}
                    />
                    <div className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-lg dark:bg-gray-900/90 z-[999] border border-white/40">
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-[0.4em] text-teal-500">
                                Theme
                            </p>
                            <h1 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                                Pick the theme color
                            </h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                Instantly restyle the background gradient across the site.
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                            {themeOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setColor(option.id)}
                                    className={`relative flex h-20 w-20 items-center justify-center rounded-xl border-2 ${
                                        bgColorRedux === option.id
                                            ? "border-teal-500 shadow-[0_0_30px_rgba(45,212,191,0.6)]"
                                            : "border-black/20 shadow-md"
                                    } transition hover:scale-105 focus:outline-none`}
                                    style={{ background: option.swatch }}
                                    aria-label={`Activate ${option.label} theme`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
