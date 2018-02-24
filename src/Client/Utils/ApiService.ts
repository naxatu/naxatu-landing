export interface ISubscriptionSuccess {
    msg: string;
}

export interface ISubscriptionError {
    error: string;
}

export type SubscriptionResult = ISubscriptionSuccess | ISubscriptionError;

export async function subscribe(formData: Record<string, string>): Promise<SubscriptionResult> {
    const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    });

    if (response.status !== 200) {
        return {
            error: 'Something went wrong.',
        };
    }

    return response.json();
}
