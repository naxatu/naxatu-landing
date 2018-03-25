import * as React from 'react';
import * as i18n from "i18n";
import {Emojify} from '../../Utils/Emojify';

export class XataToken extends React.Component<any, any> {
    render() {
        return (
            <section className="section -xata xata" id="xata">
                <div className="section-content">
                    <div className="topic -left">
                        <h2 className="topic-title">{i18n.__("Немного фактов о XATA-токене")}</h2>
                    </div>

                    <article className="xata-article">
                        <h3>{i18n.__("Гарантия его ценности")}</h3>
                        <p className="paragraph">
                            {i18n.__("В жизни каждого человека стоит выбор между бутылкой на вечер.")}{' '}
                            {i18n.__("Красное или белое?")}{' '}
                            {i18n.__("Текила или водка?")}{' '}
                            {i18n.__("Нефильтрованное пиво или вода?")}{' '}
                            {i18n.__("Пора с этим покончить!")}
                            <br/><br/>
                            {i18n.__("С помощью XATA-токенов вы сможете проголосовать за каждую новую бутылку в коллекцию бара.")}{' '}
                            {i18n.__("Бутылка, которая наберет больше всего XATA, будет поставлена в специальное место и ни одна капля напитка не будет пролита зря.")}{' '}
                            {i18n.__("Самый активный участник голосования получит приглашение на вскрытие и распитие этого напитка.")}
                            <br/><br/>

                            {i18n.__("А также вы можете свободно переводить и хранить XATA-токены в надеждах на его рост, как это делают хомяки и трейдеры.")}
                            <br/><br/>
                            <a href="#ico" className="link anchor">{i18n.__('Получить XATA')} →</a>
                        </p>
                    </article>

                    <article className="xata-article">
                        <h3>{i18n.__("Возможно безопасен, но это не точно")}</h3>
                        <p className="paragraph">
                            {i18n.__("Я выучил Solidity ровно на столько, что бы можно было написать этот контракт. Большая часть кода была скопирована с других контрактов и не факт, что все работает хорошо. Хотя... Там нечему ломаться.")}
                            <br/><br/>
                            {i18n.__("Еще ни один эксперт не смотрел этот контракт. Надеюсь вы станете первым и сообщите, вдруг что не так. Ведь еще можно что-то поправить? Правда?")}
                            <br/><br/>
                            {i18n.__("А вообще, его исходный код открыт, а помыслы чисты.")}
                            {' '}
                            {i18n.__("Все на")} <a href="https://github.com/naxatu" className="link" target="_blank">GitHub</a>.
                        </p>
                    </article>

                    <article className="xata-article">
                        <h3>{i18n.__("Бонусы")}</h3>
                        <p className="paragraph">
                            {i18n.__("Курс, по котором раздаются XATA")}: <b>1 ETH = 100 XATA</b>
                            <br/><br/>
                            {i18n.__("Еще есть бонус, который начисляется автоматически, если вы вносите не менее")} <b>0.01 Ether</b>.
                            {i18n.__("Вы также получает дополнительно 1 XATA для каждого Ether из общего вклада.")}
                        </p>
                    </article>

                    <div>
                        <a className="btn anchor __js_contribute" contribute-btn-key="bonuses" href="#ico">
                            {i18n.__("Получить XATA")}
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
