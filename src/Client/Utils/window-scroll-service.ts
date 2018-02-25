import {ISubscription} from './ISubscription';
import {IDestroyable} from './IDestroyable';

export type ScrollHandler = (scrollTop: number) => void;

export class WindowScrollService implements ISubscription, IDestroyable {
    private readonly subscriptions: Set<ScrollHandler> = new Set();

    public constructor() {
        window.addEventListener('scroll', this.scrollHandler, {passive: true});
        window.document.body.addEventListener('touchmove', this.scrollHandler, {passive: true});
    }

    public subscribe(handler: ScrollHandler): void {
        this.subscriptions.add(handler);
    }

    public unsubscribe(handler: ScrollHandler): void {
        this.subscriptions.delete(handler);
    }

    public destroy(): void {
        window.removeEventListener('scroll', this.scrollHandler);
        window.document.body.removeEventListener('touchmove', this.scrollHandler);
        this.subscriptions.clear();
    }

    private scrollHandler = (event: Event) => {
        const scrollTop = window.pageYOffset;
        for (const handler of this.subscriptions) {
            // console.log(handler, scrollTop);
            handler(scrollTop);
        }
    }
}
