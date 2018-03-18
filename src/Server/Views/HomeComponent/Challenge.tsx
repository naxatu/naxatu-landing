import * as React from 'react';
import * as i18n from "i18n";
import {Emojify} from '../../Utils/Emojify';

const challengeLink = "https://www.instagram.com/explore/tags/собираюнахату/";
const hashTag = i18n.__('#собираюнахату');
const instagramLinkComponent = <a href={challengeLink} className="link" target="_blank">{hashTag}</a>;

export class Challenge extends React.Component<any, any> {
    render() {
        return (
            <section className="section -challenge challenge" id="challenge">
                <div className="section-content challenge-content">

                    <div className="challenge-square -text">
                        <div className="topic -left -small">
                            <h2 className="topic-title">{instagramLinkComponent} {i18n.__("челендж")}</h2>
                        </div>
                        <p className="paragraph">{i18n.__("Помогите мне выбрать интерьер квартиры!")}</p>
                        <ul>
                            <li> - {i18n.__("какого же цвета положить паркет?")}</li>
                            <li> - {i18n.__("как выбрать рисунок настенного ковра?")}</li>
                            <li> - {i18n.__("чем закрасить окна?")}</li>
                        </ul>
                        <br/>
                        <p className="paragraph">
                            {i18n.__("Подскажите с помощью инстаграма!")} <br/>
                            {i18n.__("Публикуй себя с крутым интерьером и хештегом")} <u>{hashTag}</u>. {' '}
                            {i18n.__("Каждую неделю буду репостить 3 лучшие фотографии, а счасливчики получат по 10 XATA-токенов")}
                            <span className="text-red">*</span>
                        </p>

                        <p className="paragraph">
                            <b>{i18n.__("Помни! Интерьер, найденный в гугле — это не прикольно.")}</b>
                            {i18n.__("Важно то, что видел своими глазами, то, от чего волосы на ногах встали дыбом!")}
                        </p>
                        <div className="paragraph-special">
                            <div className="paragraph-special__item">
                                * {i18n.__("только если укажут кошелек Ethereum или хотя бы ответят в личку, ведь это целых 2000грн!")}
                            </div>
                        </div>
                    </div>

                    <div className="challenge-square -image">
                        <img src="/image/insta-image.png"
                             title="Настенный ковер, это лучшее что может быть в квартире. Но не бойся, ковер не будет закрывать твое имя на коллаже."
                             alt="Настенный ковер в хате"
                        />
                    </div>

                </div>
            </section>
        )
    }
}