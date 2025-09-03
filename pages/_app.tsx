import "@/styles/globals.css";
import "@/styles/lg.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../components/redux/store";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: "absolute",
                    width: 0,
                    height: 0,
                    visibility: "hidden",
                }}
            >
                <filter
                    id="lensFilter"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    filterUnits="objectBoundingBox"
                >
                    <feComponentTransfer in="SourceAlpha" result="alpha">
                        <feFuncA type="identity" />
                    </feComponentTransfer>
                    <feGaussianBlur
                        in="alpha"
                        stdDeviation="50"
                        result="blur"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="blur"
                        scale="50"
                        xChannelSelector="A"
                        yChannelSelector="A"
                    />
                </filter>
            </svg>
        </>
    );
}
