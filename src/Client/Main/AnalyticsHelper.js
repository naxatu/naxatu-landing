/**
 * @param category
 * @param action
 * @param label
 * @param value
 */
export function sendGAEvent(category, action, label, value) {
    const eventData = {
        event: 'gaEvent',
        eventCategory: category,
        eventAction: action
    };

    if (label) {
        eventData.eventLabel = label;
    }

    if (value) {
        eventData.eventValue = value;
    }

    dataLayer && dataLayer.push(eventData);
}