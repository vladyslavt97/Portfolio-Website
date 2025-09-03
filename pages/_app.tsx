// pages/_app.tsx
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

            {/* Keep this ONCE in the app, off-screen (not display:none) */}
            <svg
                aria-hidden="true"
                style={{
                    position: "fixed",
                    left: "-100%",
                    top: "-100%",
                    width: 0,
                    height: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                <defs>
                    <filter
                        id="lensFilter"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        filterUnits="userSpaceOnUse"
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
                </defs>
            </svg>
        </>
    );
}
