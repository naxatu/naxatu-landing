declare global {
    interface Window {
        __initState: any;
    }

    interface WebpackRequire {
        <T>(path: string): T;
    }
}

export {};
