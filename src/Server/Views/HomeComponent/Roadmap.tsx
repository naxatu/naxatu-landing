import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class Roadmap extends React.Component<any, any> {
    render() {
        return (
            <section className="section -roadmap roadmap" id="roadmap">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Нужен Roadmap?</h2>
                        <p className="topic-desc">
                            Без Roadmap и жизнь не мила. Ведь это сердце проекта, это путь, по которому он
                            будет идти и развиваться. Главное &mdash; беспрекословно ему следовать.
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
                            <h3 className="roadmap-item-text-title">Март-Май 2018 &mdash; Собираю на хату</h3>
                            <p className="paragraph roadmap-item-text-p">
                                На этом этапе я разрабатываю и запускаю вебсайт и смарт-токен XATA.
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                На сайт, смарт токен, на тексты, на дизайн, ушло чуть больше месяца.
                                Месяца бессонных ночей!
                                <br/><br/>
                                А ведь написание и публикация токена по стандарту ERC20 (на Ethereum, конечно же)
                                требует стальных яиц и выносливой психики. Малейшая ошибка или баг
                                опубликованного контракта приводит к боли и страданиям.
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
                            <h3 className="roadmap-item-text-title">Июнь 2018 &mdash; Покупаю хату</h3>
                            <p className="paragraph roadmap-item-text-p">
                                Это будет самая занимательная из историй. Придется со счастливым лицом идти в отдел продаж
                                ЖК Rybalsky. Ведь закончить начатое и выполнить обещание &mdash; это самое приятное,
                                что можно испытать.
                                <br/><br/>
                                <i>Перед самой покупкой, нужно будет найти способ конвертировать сумму в национальные
                                «тугрики», избавившись от удобного Ethereum</i> <Emojify>:cry:</Emojify>
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
                            <h3 className="roadmap-item-text-title">2-й квартал 2019 &mdash; Ремонтирую хату</h3>
                            <p className="paragraph roadmap-item-text-p">
                                Это этап важных решений, когда нужно сделать выбор между
                                установкой золотого унитаза или дивана в гостиную. А также найти крутого художника,
                                который на стене <a href="#heroes" className="link anchor">измалюет маслом все ваши имена</a>.
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                Определяемся с интерьером с помощью наших друзей по челенджу.
                                Выбираем материалы, делаем перепланировку (да-да, нужно что бы не как у всех!).
                            </p>
                            <p className="paragraph roadmap-item-text-p">
                                Еще необходимо сделать большую кухню и очень
                                важно выбрать место для бара. <s>Алкоголизм</s> хобби должно развиваться
                                и для этого нужны все условия.
                            </p>
                            <p className="paragraph roadmap-item-text-p"><Emojify>Бар + кухня = :heart:</Emojify></p>

                            <a href="#ico" className="btn anchor">Подкинуть на Бар</a>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}