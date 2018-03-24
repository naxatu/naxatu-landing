import * as React from 'react';

interface ITelegramBoxProps {
    telegram: string;
}

export class TelegramBox extends React.Component<ITelegramBoxProps, any> {
    render() {
        const {telegram} = this.props;

        return (
            <div className="telegram-box">
                <a href={`https://t.me/${telegram}`}
                   target="_blank"
                   className="telegram-box__icon"
                   title="All in Telegram channel"
                ><i className="fab fa-telegram-plane"/></a>
            </div>
        )
    }
}