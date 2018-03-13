import * as React from 'react';

interface ITelegramBoxProps {

}

export class TelegramBox extends React.Component<ITelegramBoxProps, any> {
    render() {
        return (
            <div className="telegram-box">
                <div className="telegram-box__icon"><i className="fab fa-telegram-plane"/></div>
                <div className="telegram-box-content">
                    <a href="https://t.me/naxatu"
                       target="_blank"
                       className="telegram-box-link">все события в Telegram</a>
                </div>
            </div>
        )
    }
}