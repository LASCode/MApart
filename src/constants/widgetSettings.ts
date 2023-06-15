import { GLOBAL_CONFIG } from "@/configs";

const guests = GLOBAL_CONFIG.BNOVO_WIDGET_DEFAULT_GUESTS;
const token = GLOBAL_CONFIG.BNOVO_WIDGET_TOKEN;
const dateArrival = GLOBAL_CONFIG.BNOVO_WIDGET_DEFAULT_ARRIVAL_DATE;
const dateDeparture = GLOBAL_CONFIG.BNOVO_WIDGET_DEFAULT_DEPARTURE_DATE;
const datesIsDisabled = dateArrival === 0 || dateDeparture === 0;

export const WIDGET_SETTINGS = {
    uid: token,
    adults_default: guests,
    dates_preset: datesIsDisabled ? undefined : "on",
    dfrom_tomorrow: !datesIsDisabled && dateArrival === 1 ? "on" : undefined,
    dfrom_custom: !datesIsDisabled && dateArrival >= 2 ? "on" : undefined,
    dfrom_value: !datesIsDisabled && dateArrival >= 2 ? dateArrival : undefined,
    dto_nextday: !datesIsDisabled && dateDeparture === 1 ? "on" : undefined,
    dto_custom: !datesIsDisabled && dateDeparture >= 2 ? "on" : undefined,
    dto_value: !datesIsDisabled && dateDeparture >= 2 ? dateDeparture : undefined,
    url: "https://m-apart.ru",

    cancel_color: "#FFFFFF",
    switch_mobiles: "on",
    switch_mobiles_width: "700",
    background: "#ffffff",
    background_mobile: "#ffffff",
    bg_alpha: "100",
    bg_alpha_mobile: "100",
    border_color_mobile: "#C6CAD3",
    padding: "0",
    padding_mobile: "0",
    border_radius: "8",
    font_type: "inter",
    without_title: "on",
    without_title_mobile: "on",
    title_color: "#242742",
    title_color_mobile: "#242742",
    title_size: "22",
    title_size_mobile: "22",
    inp_color: "#242742",
    inp_bordhover: "#dedfe3",
    inp_bordcolor: "#BCBCBC",
    inp_alpha: "100",
    btn_background: "#f4ca00",
    btn_background_over: "#c09d00",
    btn_textcolor: "#000000",
    btn_textover: "#000000",
    btn_bordcolor: "#f4ca00",
    btn_bordhover: "#c09d00",
};
