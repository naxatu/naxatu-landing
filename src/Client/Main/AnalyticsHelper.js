/**
 * @param category
 * @param action
 * @param label
 */
export function sendGAEvent(category, action, label) {
    const eventData = {
        event: 'gaEvent',
        eventCategory: category,
        eventAction: action
    };

    if (label) {
        eventData.eventLabel = label;
    }

    dataLayer && dataLayer.push(eventData);
}