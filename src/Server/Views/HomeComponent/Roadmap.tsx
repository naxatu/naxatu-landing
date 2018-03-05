import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class Roadmap extends React.Component<any, any> {
    render() {
        return (
            <section className="section -roadmap roadmap" id="roadmap">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Нужен Roadmap?</h2>
                    </div>

                    <div className="roadmap-item">
                        <div className="roadmap-item-image-wrapper">
                            <label className="roadmap-item-image">
                                <i className="fab fa-ethereum roadmap-item-image-icon"/>
                            </label>
                            <div className="roadmap-line"/>
                        </div>
                        <div className="roadmap-item-text-wrapper">
                            <h3 className="roadmap-item-text-title">Март-Май 2018 - Собираю на Хату</h3>
                            <p className="paragraph roadmap-item-text-p">
                                Этап разработки и запуска вебсайта и смарт-токена {' '}
                                <a href="#xata" className="link anchor">XATA</a>.
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                Этап подвигов и свершений, ведь написание и публикация токена по стандарту ERC20
                                (на Ethereum, конечно же) требует стальных яиц и выносливой психики.
                                Малейшая ошибка или баг опубликованного контракта приводит
                                к <a href="http://lurkmore.to/Butthurt" title="Lurkmore - Butthurt" target="_blank"
                                     className="link">боли и страданиям</a>.
                            </p>
                        </div>
                    </div>

                    <div className="roadmap-item">
                        <div className="roadmap-item-image-wrapper">
                            <label className="roadmap-item-image">
                                <i className="far fa-building roadmap-item-image-icon"/>
                            </label>
                            <div className="roadmap-line"/>
                        </div>
                        <div className="roadmap-item-text-wrapper">
                            <h3 className="roadmap-item-text-title">Июнь 2018 - Покупаю Хату</h3>
                            <p className="paragraph roadmap-item-text-p">
                                Иду, такой, в отдел продаж ЖК и покупать начинаю:
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                - Дайте хату. <br/>
                                - Которую? <br/>
                                - А вон ту, наx. И побыстрей. Ethereum сойдет? Иль вам лаве в кубриках? <br/>
                                - Давай Ethereum, а лучше в Bitcoin. <br/>
                                - Держи, братуха. И да, где ключи, с*ка? И мобилу тож давай.
                            </p>
                        </div>
                    </div>

                    <div className="roadmap-item">
                        <div className="roadmap-item-image-wrapper">
                            <label className="roadmap-item-image">
                                <i className="fas fa-paint-brush roadmap-item-image-icon"/>
                            </label>
                        </div>
                        <div className="roadmap-item-text-wrapper">
                            <h3 className="roadmap-item-text-title">2-й квартал 2019 - Ремонтирую Хату</h3>
                            <p className="paragraph roadmap-item-text-p">
                                Это этап важных решений, когда нужно сделать выбор между
                                установкой золотого унитаза или дивана в гостинную.
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                Определяемся с интерьером с помощью наших
                                друзей по <a href="#challenge" className="link anchor">челенджу</a>.
                                Выбираем материалы, делаем перепланировку (да-да, нужно что бы не как у всех!).
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                Сделать <s>пиздатую</s> большую кухню и самое важное - выбрать место для бара. Хобби должно развиваться
                                и для этого нужны все условия.
                            </p>
                            <p className="paragraph roadmap-item-text-p"><Emojify>Бар + кухня = :heart:</Emojify></p>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}