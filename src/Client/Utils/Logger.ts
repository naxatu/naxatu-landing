const t0 = window.performance.now() / 1000;

// tslint:disable-next-line:no-any
export function log(...args: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
        const t1 = window.performance.now() / 1000;

        console.log(`%c ${(t1 - t0).toFixed(3)}`, 'color: grey', ...args);
    }
}
