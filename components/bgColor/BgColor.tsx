import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bgColorChanger } from "../redux/bgChange";
import { RootState } from "../redux/store";

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

    return (
        <div className="hidden md:block md:mx-5 md:my-2 relative">
            {bgColorRedux === 1 && (
                <div
                    onClick={(e) => setOpened(!opened)}
                    className="rounded-full w-12 h-12 cursor-pointer border-white border-2 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400"
                ></div>
            )}
            {bgColorRedux === 2 && (
                <div
                    onClick={(e) => setOpened(!opened)}
                    className="rounded-full w-12 h-12 cursor-pointer border-white border-2 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"
                ></div>
            )}
            {bgColorRedux === 3 && (
                <div
                    onClick={(e) => setOpened(!opened)}
                    className="rounded-full w-12 h-12 cursor-pointer border-white border-2 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-300 via-lime-200 to-emerald-200"
                ></div>
            )}
            {opened && (
                <div className="z-[999]">
                    <div
                        className="w-screen h-screen bg-black/70 fixed top-0 left-0 z-[998] transition-opacity duration-300"
                        onClick={(e) => setOpened(!opened)}
                    ></div>
                    <div className="w-96 bg-gradient-to-tr from-white to-green-400 h-80 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl z-[999] shadow-xl p-6 transition-transform duration-300">
                        <h1 className="font-serif text-teal-800 text-center text-xl font-bold bg-teal-300 border-2 border-teal-500 rounded-full px-5 py-2 mx-3 mb-6 shadow-sm">
                            Pick the theme color:
                        </h1>
                        <div className="flex justify-center flex-row items-center gap-5">
                            <div
                                className="border-black border-2 w-20 h-20 rounded cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400"
                                onClick={(e) => setColor(1)}
                            ></div>
                            <div
                                className="border-black border-2 w-20 h-20 rounded cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"
                                onClick={(e) => setColor(2)}
                            ></div>
                            <div
                                className="border-black border-2 w-20 h-20 rounded cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-300 via-lime-200 to-emerald-200"
                                onClick={(e) => setColor(3)}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
