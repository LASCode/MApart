export {};
declare global {
    interface Window {
        Bnovo_Widget: { init: (fun: () => void) => void; open: (id: string, options: object) => void };
    }
}
