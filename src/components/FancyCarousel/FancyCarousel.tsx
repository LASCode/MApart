/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useRef } from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.umd";
import type { ComponentOptionsType } from "@fancyapps/ui/types/Fancybox/options";

export const FancyCarousel = ({
    withThumbs,
    ...props
}: {
    children?: React.ReactNode;
    options?: Partial<ComponentOptionsType>;
    withThumbs?: boolean;
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const options = {
            ...props.options,
            Dots: false,
            Thumbs: withThumbs
                ? {
                      type: "classic",
                  }
                : false,
        };

        const instance = new NativeCarousel(container, options, withThumbs ? { Thumbs } : undefined);

        return () => {
            instance.destroy();
        };
    });

    return (
        <div className="f-carousel" ref={containerRef}>
            {props.children}
        </div>
    );
};
