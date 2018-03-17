import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class WhereHouse extends React.Component<any, any> {
    render() {
        return (
            <section className="section -rybalsky rybalsky" id="rybalsky">
                <article className="section-content rybalsky-container">
                    <div className="rybalsky-content">
                        <div className="topic -left -small">
                            <h2 className="topic-title">ЖК RYBALSKY &mdash; Вон там хочу хату</h2>
                        </div>
                        <div>
                            <p className="paragraph rybalsky-p -disclaimer">
                                О нет! Не подумайте что это реклама {' '}
                                <a href="https://rybalsky.com.ua?rel=дайте+мне+скидку"
                                   target="_blank" className="link __js-partner"
                                   partner-event-key="rybalsky"
                                   title="ЖК Rybalsky &mdash; Я хочу от вас скидку ^_^"
                                >ЖК Rybalsky</a>!
                            </p>

                            <p className="paragraph rybalsky-p">
                                Пожалуй, это дом мечты &mdash; квадратное здание и 9 этажей.
                                Расположенный на промышленном, полузаброшенном полуострове.
                                Вокруг недостроенные мосты, железная дорога и прекрасный вид на Днепр.
                            </p>

                            <p className="paragraph rybalsky-p"><Emojify>Романтика :heart_eyes:</Emojify></p>

                            <a href="#ico" className="btn anchor">Подкинуть на RYBALSKY</a>
                        </div>
                    </div>
                    <img src="/image/zk-rybalsky.png" className="rybalsky-image"
                         title="ЖК Rybalsky, если ты слышишь или видишь это &mdash; дай мне скидку!"
                         alt="ЖК Rybalsky"
                    />
                </article>
            </section>
        )
    }
}