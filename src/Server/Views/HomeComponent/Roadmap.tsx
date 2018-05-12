import * as React from 'react';
import * as i18n from 'i18n';
import {Emojify} from '../../Utils/Emojify';

export class Roadmap extends React.Component<any, any> {
    render() {
        return (
            <section className="section -roadmap roadmap" id="roadmap">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">{i18n.__("Нужен Roadmap?")}</h2>
                        <p className="topic-desc">
                            {i18n.__("Без Roadmap и жизнь не мила. Ведь это сердце проекта —это путь, по которому он будет идти и развиваться. Главное — беспрекословно ему следовать.")}
                        </p>
                    </div>

                    <div className="roadmap-item">
                        <div className="roadmap-item-image-wrapper">
                            <label className="roadmap-item-image">
                                <i className="fab fa-ethereum roadmap-item-image-icon"/>
                            </label>
                            <div className="roadmap-line"/>
                        </div>
                        <div className="roadmap-item-text-wrapper">
                            <h3 className="roadmap-item-text-title">{i18n.__("Март-Май 2018 — Собираю на хату")}</h3>
                            <p className="paragraph roadmap-item-text-p">
                                {i18n.__("На этом этапе я разрабатываю и запускаю вебсайт и смарт-токен XATA.")}
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                {i18n.__("На сайт, смарт-токен, на тексты и на дизайн, ушло чуть больше месяца. Месяца бессонных ночей!")}
                                <br/><br/>
                                {i18n.__("А ведь написание и публикация токена по стандарту ERC20 (на Ethereum, конечно же) требует стальных яиц и крепкой психики. Малейшая ошибка или баг опубликованного контракта приводит к боли и страданиям.")}
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
                            <h3 className="roadmap-item-text-title">{i18n.__("Июнь 2018 — Покупаю хату")}</h3>
                            <p className="paragraph roadmap-item-text-p">
                                {i18n.__("Это будет самая занимательная из историй. Придется со счастливым лицом идти в отдел продаж ЖК RYBALSKY. Ведь закончить начатое и выполнить обещание — это самое приятное, что можно испытать.")}
                                <br/><br/>
                                <i>{i18n.__("Перед самой покупкой нужно будет найти способ конвертировать сумму в национальные «тугрики», избавившись от удобного Ethereum")}</i>
                                <Emojify>:cry:</Emojify>
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
                            <h3 className="roadmap-item-text-title">{i18n.__("2-й квартал 2019 — Ремонтирую хату")}</h3>
                            <p className="paragraph roadmap-item-text-p">
                                {i18n.__("Это этап важных решений, когда нужно сделать выбор между установкой золотого унитаза или дивана в гостиную. А также найти крутого художника, который на стене")}{' '}
                                <a href="#heroes" className="link anchor">
                                    {i18n.__("намалюет маслом все ваши имена")}
                                </a>.
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                {i18n.__("Определяемся с интерьером с помощью наших друзей по челенджу. Выбираем материалы, делаем перепланировку (да-да, нужно, чтобы не как у всех!).")}

                            </p>
                            <p className="paragraph roadmap-item-text-p"
                               dangerouslySetInnerHTML={{__html: i18n.__("Еще необходимо сделать большую кухню и очень важно выбрать место для бара. <s>Алкоголизм</s> хобби должно развиваться и для этого нужны все условия.")}}
                            />
                            <p className="paragraph roadmap-item-text-p"><Emojify>{i18n.__("Бар + кухня")} = :heart:</Emojify></p>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}