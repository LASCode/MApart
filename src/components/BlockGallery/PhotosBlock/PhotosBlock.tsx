import cnBind from "classnames/bind";
import Image from "next/image";

import type { PhotosBlockProps } from "./PhotosBlock.types";

import styles from "./PhotosBlock.module.scss";
import {BLUR_IMAGE} from "@/constants/stubs";

const cx = cnBind.bind(styles);

export const PhotosBlock = ({ images }: PhotosBlockProps) => {
    return (
        <div className={cx("container")}>
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
                    />
                </div>
            ))}
        </div>
    );
};
