import * as React from 'react';

interface ITelegramBoxProps {

}

export class TelegramBox extends React.Component<ITelegramBoxProps, any> {
    render() {
        return (
            <div className="telegram-box">
                <a href="https://t.me/naxatu"
                   target="_blank"
                   className="telegram-box__icon"
                   title="Все события проекта постятся в телеграме"
                ><i className="fab fa-telegram-plane"/></a>
            </div>
        )
    }
}