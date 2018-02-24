import 'intersection-observer';
import { IDestroyable } from './IDestroyable';

export type IntersectionHandler = (entries: IntersectionObserverEntry[]) => void;

export class WindowIntersectionObserverService implements IDestroyable {
    private readonly _observers: Map<IntersectionHandler, IntersectionObserver> = new Map();

    public getIntersectionObserver(callback: IntersectionHandler, options?: IntersectionObserverInit): IntersectionObserver {
        let observer = this._observers.get(callback);
        if (observer !== undefined) {
            return observer;
        }

        observer = new IntersectionObserver(callback, options);
        this._observers.set(callback, observer);
        return observer;
    }

    public removeIntersectionObserver(callback: IntersectionHandler): void {
        const observer = this._observers.get(callback);
        if (observer !== undefined) {
            observer.disconnect();
        }
        this._observers.delete(callback);
    }

    public destroy(): void {
        for (const [key, observer] of this._observers) {
            observer.disconnect();
        }
        this._observers.clear();
    }
}
