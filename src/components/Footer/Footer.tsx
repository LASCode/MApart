import cnBind from "classnames/bind";
import Link from "next/link";

import { CompanyDetailsModal } from "@/components/CompanyDetailsModal";
import type { FooterProps } from "@/components/Footer/Footer.types";
import { Logo } from "@/components/Logo";
import { Socials } from "@/components/Socials";
import { TermsOfUseModal } from "@/components/TermsOfUseModal";
import { GLOBAL_CONFIG } from "@/configs";
import { TEL_NUMBER } from "@/constants/other";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsMobile } from "@/hooks/useIsMobile";

import styles from "./Footer.module.scss";

const cx = cnBind.bind(styles);

export const Footer = ({ className }: FooterProps) => {
    const isMobile = useIsMobile();
    const [companyDetailsModalIsOpen, openCompanyDetailsModal, closeCompanyDetailsModal] = useBooleanState(false);
    const [termsOfUseModalIsOpen, openTermsOfUseModal, closeTermsOfUseModal] = useBooleanState(false);

    return (
        <>
            <footer className={cx("footer", className)}>
                <div className={cx("content")}>
                    <Logo className={cx("logo")} />
                    <Socials className={cx("socials")} />

                    <div className={cx("credits")}>
                        <Link className={cx("tel")} href={`tel:${TEL_NUMBER.trim()}`}>
                            {TEL_NUMBER}
                        </Link>
                        <span className={cx("address")}>
                            Санкт-Петербург,{isMobile && <br />} Кременчугская улица, 13к1
                        </span>
                    </div>
                </div>
                <div className={cx("source")}>
                    <div className={cx("credentials")}>
                        <span>M Apart © Все права защищены. 2023.</span>
                        <span className={cx("credentials-item")} onClick={openTermsOfUseModal}>
                            Пользовательское соглашение
                        </span>
                        <span className={cx("credentials-item")} onClick={openCompanyDetailsModal}>
                            Реквизиты
                        </span>
                    </div>

                    <iframe
                        className={cx("iframe")}
                        src={GLOBAL_CONFIG.YANDEX_RATING_IFRAME_HREF}
                        width="150"
                        height="50"
                    />

                    <span>
                        Разработка: Веб-студия <a href="https://levsha-web.ru/">Левша</a>
                    </span>
                </div>
            </footer>
            <CompanyDetailsModal isOpen={companyDetailsModalIsOpen} onClose={closeCompanyDetailsModal} />
            <TermsOfUseModal isOpen={termsOfUseModalIsOpen} onClose={closeTermsOfUseModal} />
        </>
    );
};
