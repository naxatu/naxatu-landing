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
                            {i18n.__("Он бесполезен.")}
                            <br/><br/>
                            {i18n.__("XATA-токен — это контракт по стандарту ERC20, разработанный специально, что бы вы, мои дорогие, получили что-то взамен за Ethereum.")}
                            <br/><br/>
                            {i18n.__("Вы можете свободно переводить и хранить XATA.")}{' '}{i18n.__('И больше ничего.')}
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

                            {i18n.__("Все на")} <a href="https://github.com/naxatu" className="link" target="_blank">GitHub</a>.
                        </p>
                    </article>

                    <article className="xata-article">
                        <h3>Бонусы</h3>
                        <p className="paragraph">
                            {i18n.__("Курс, по котором раздаются XATA")}: <b>1 ETH = 100 XATA</b>
                            <br/><br/>
                            {i18n.__("Еще есть бонус, который начисляется автоматически, если вы вносите не менее")} <b>0.01 Ether</b>.
                            {i18n.__("Вы также получает дополнительно 1 XATA для каждого Ether из общего вклада.")}
                        </p>
                    </article>

                    <article className="xata-article">
                        <h3>{i18n.__("Возможно, от XATA будет толк. Возможно!")}</h3>
                        <p className="paragraph"><i>
                            {i18n.__("Если вы придумаете, что можно сделать с токенами XATA, то не стесняйтесь и сообщите мне. Контакты в самом низу.")}
                        </i></p>
                    </article>
                    <div>
                        <a className="btn anchor" href="#ico">{i18n.__("Получить XATA")}</a>
                    </div>
                </div>
            </section>
        )
    }
}
