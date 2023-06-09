import cnBind from "classnames/bind";

import { Modal } from "@/components/Modal";

import type { TermsOfUseModalProps } from "./TermsOfUseModal.types";

import styles from "./TermsOfUseModal.module.scss";

const cx = cnBind.bind(styles);

export const TermsOfUseModal = ({ className, ...props }: TermsOfUseModalProps) => {
    return (
        <Modal
            {...props}
            fullscreen
            hasHeader
            title="Пользовательское Соглашение"
            className={cx("terms-of-use-modal", className)}
            containerClassName={cx("modal-root")}
        >
            <div className={cx("content")}>
                <div className={cx("item")}>
                    <div className={cx("item-data")}>
                        Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем
                        M-apart.ru (далее M apart или Администрация) с одной стороны и пользователем сайта с другой.
                        Сайт M apart не является средством массовой информации. Используя сайт, Вы соглашаетесь с
                        условиями данного соглашения. Если Вы не согласны с условиями данного соглашения, не используйте
                        сайт M apart!
                    </div>
                </div>
                <div className={cx("item")}>
                    <h2 className={cx("item-title")}>Права и обязанности сторон</h2>
                    <div className={cx("item-data")}>
                        <h3 className={cx("item-name")}>Пользователь имеет право:</h3>
                        <span className={cx("item-row")}>осуществлять поиск информации на сайте</span>
                        <span className={cx("item-row")}>получать информацию на сайте</span>
                        <span className={cx("item-row")}>
                            использовать информацию сайта в личных некоммерческих целях
                        </span>
                    </div>
                    <div className={cx("item-data")}>
                        <h3 className={cx("item-name")}>Администрация имеет право:</h3>
                        <span className={cx("item-row")}>
                            по своему усмотрению и необходимости создавать, изменять, отменять правила
                        </span>
                        <span className={cx("item-row")}>ограничивать доступ к любой информации на сайте</span>
                        <span className={cx("item-row")}>создавать, изменять, удалять информацию</span>
                    </div>
                    <div className={cx("item-data")}>
                        <h3 className={cx("item-name")}>Пользователь обязуется:</h3>
                        <span className={cx("item-row")}>не нарушать работоспособность сайта</span>
                        <span className={cx("item-row")}>
                            не использовать скрипты (программы) для автоматизированного сбора информации и/или
                            взаимодействия с Сайтом и его Сервисами
                        </span>
                    </div>
                    <div className={cx("item-data")}>
                        <h3 className={cx("item-name")}>Администрация обязуется:</h3>
                        <span className={cx("item-row")}>
                            поддерживать работоспособность сайта за исключением случаев, когда это невозможно по
                            независящим от Администрации причинам.
                        </span>
                    </div>
                </div>
                <div className={cx("item")}>
                    <h2 className={cx("item-title")}>Ответственность сторон</h2>
                    <div className={cx("item-data")}>
                        <span className={cx("item-row")}>
                            администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами
                        </span>
                        <span className={cx("item-row")}>
                            в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение,
                            стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой
                            Пользователем, а также бесперебойную работу информационного ресурса
                        </span>
                    </div>
                </div>
                <div className={cx("item")}>
                    <h2 className={cx("item-title")}>Условия действия Соглашения</h2>
                    <div className={cx("item-data")}>
                        <span className={cx("item-row")}>
                            Данное Соглашение вступает в силу при любом использовании данного сайта. Соглашение
                            перестает действовать при появлении его новой версии. Администрация оставляет за собой право
                            в одностороннем порядке изменять данное соглашение по своему усмотрению. Администрация не
                            оповещает пользователей об изменении в Соглашении.
                        </span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
