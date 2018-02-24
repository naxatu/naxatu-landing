export interface ISubscription {
    subscribe(handler: () => void): void;
    unsubscribe(handler: () => void): void;
}
