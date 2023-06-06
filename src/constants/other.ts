import { GLOBAL_CONFIG } from "@/configs";

export const TEL_NUMBER = `+${GLOBAL_CONFIG.TEL_NUMBER.substring(0, 1)} ${GLOBAL_CONFIG.TEL_NUMBER.substring(
    1,
    4,
)} ${GLOBAL_CONFIG.TEL_NUMBER.substring(4, 7)} ${GLOBAL_CONFIG.TEL_NUMBER.substring(7, 11)}`;
