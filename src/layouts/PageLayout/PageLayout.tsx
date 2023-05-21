import {Header} from "@/components/Header";
import {PageLayoutProps} from "./PageLayout.types";

import cnBind from 'classnames/bind';
import styles from './PageLayout.module.scss';
import {useAppWindowSize} from "@/hooks/useAppWindowSize";
import {Footer} from "@/components/Footer";
const cx = cnBind.bind(styles);

export const PageLayout = ({ children, withFooter = true, withHeader = true }: PageLayoutProps) => {
    useAppWindowSize();

    return (
        <div className={cx('page-layout')}>
            {withHeader && (
                <Header className={cx('header')} />
            )}

            <main className={cx('main')}>
                {children}
            </main>

            {withFooter && (
                <Footer className={cx('footer')} />
            )}
        </div>
    )
};