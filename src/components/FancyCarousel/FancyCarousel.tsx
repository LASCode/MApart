/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useRef } from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.umd.js";
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
            slidesPerPage: 1,
            Thumbs: withThumbs
                ? {
                      type: "classic",
                      thumbTpl: `
                        <button type="button" aria-label="{{GOTO}}"><img class="f-thumbs__slide__img" src="{{%s}}" alt="" /></button>
                      `,
                  }
                : false,
        };

        const instance = new NativeCarousel(container, options, withThumbs ? { Thumbs } : undefined);

        return () => {
            instance.destroy();
        };
    }, [props.options, withThumbs]);

    return (
        <div className="f-carousel" ref={containerRef}>
            {props.children}
        </div>
    );
};
