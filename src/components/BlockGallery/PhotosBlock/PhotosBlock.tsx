import cnBind from "classnames/bind";
import Image from "next/image";

import { BLUR_IMAGE } from "@/constants/stubs";

import type { PhotosBlockProps } from "./PhotosBlock.types";

import styles from "./PhotosBlock.module.scss";

const cx = cnBind.bind(styles);

export const PhotosBlock = ({ images, isVisible }: PhotosBlockProps) => {
    return (
        <div className={cx("container", { visible: isVisible })}>
            {images.map((image, index) => (
                <div className={cx(`div${index + 1}`)} key={image}>
                    <Image
                        className={cx("image")}
                        src={image}
                        alt="room"
                        width={500}
                        height={400}
                        placeholder="blur"
                        blurDataURL={BLUR_IMAGE}
                        data-fancybox
                        data-rsc={image}
                    />
                </div>
            ))}
        </div>
    );
};
