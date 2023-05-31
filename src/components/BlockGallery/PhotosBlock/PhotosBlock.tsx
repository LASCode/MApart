import cnBind from "classnames/bind";
import Image from "next/image";

import type { PhotosBlockProps } from "./PhotosBlock.types";

import styles from "./PhotosBlock.module.scss";

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
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcXQ8AAbsBHLLDr5MAAAAASUVORK5CYII="
                    />
                </div>
            ))}
        </div>
    );
};
