import * as React from 'react';
import * as i18n from 'i18n';
import * as qs from 'querystring';
import {Emojify} from '../../Utils/Emojify';

const utm = qs.stringify({
    utm_campaign: 'give_me_discount',
    utm_source: 'naxatu',
    utm_medium: 'percent_per_view'
});

const rybalskyUrl = `https://rybalsky.com.ua?${utm}`;

export class WhereHouse extends React.Component<any, any> {
    render() {
        return (
            <section className="section -rybalsky rybalsky" id="rybalsky">
                <article className="section-content rybalsky-container">
                    <div className="rybalsky-content">
                        <div className="topic -left -small">
                            <h2 className="topic-title">{i18n.__("ЖК RYBALSKY — Вон там хочу хату")}</h2>
                        </div>
                        <div>
                            <p className="paragraph rybalsky-p -disclaimer">
                                {i18n.__("О нет! Не подумайте что это реклама")} {' '}
                                <a href={rybalskyUrl}
                                   target="_blank" className="link __js-partner"
                                   partner-event-key="rybalsky"
                                   title={i18n.__("ЖК Rybalsky — Я хочу от вас скидку") + " ^_^"}
                                >{i18n.__("ЖК Rybalsky")}</a>!
                            </p>
                            <p className="paragraph rybalsky-p">
                                {i18n.__("Пожалуй, это дом мечты — квадратное здание и 9 этажей. Он расположен на промышленном, полузаброшенном полуострове. Вокруг недостроенные мосты, железная дорога и прекрасный вид на Днепр.")}
                            </p>
                            <p className="paragraph rybalsky-p">
                                {i18n.__("Романтика")} <Emojify>:heart_eyes:</Emojify>
                            </p>
                            <a href="#ico" className="btn anchor">{i18n.__("Подкинуть на RYBALSKY")}</a>
                        </div>
                    </div>
                    <img src="/image/zk-rybalsky.png" className="rybalsky-image"
                         title={i18n.__("ЖК Rybalsky, если ты слышишь или видишь это — дай мне скидку!")}
                         alt={i18n.__("ЖК Rybalsky")}
                    />
                </article>
            </section>
        )
    }
}