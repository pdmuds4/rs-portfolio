"use client";
import { PropsWithChildren } from "react"
import { ParallaxProvider } from "react-scroll-parallax";

export const PageProvider: React.FC<PropsWithChildren> = (props) => {
    return (
        <ParallaxProvider>
            {props.children}
        </ParallaxProvider>
    );
}

export default PageProvider;