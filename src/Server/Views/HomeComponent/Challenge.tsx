import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

const challengeLink = "https://www.instagram.com/explore/tags/собираюнахату/";
const hashTag = '#собираюнахату';
const instagramLinkComponent = <a href={challengeLink} className="link" target="_blank">{hashTag}</a>;

export class Challenge extends React.Component<any, any> {
    render() {
        return (
            <section className="section -challenge challenge" id="challenge">
                <div className="section-content">
                    <div className="topic -left -small">
                        <h2 className="topic-title">{instagramLinkComponent} челендж</h2>
                    </div>
                    <p className="paragraph">
                        Помогите мне выбрать интерьер квартиры!
                        <br/>
                        <br/>

                        Бьюсь в догадках, какого же цвета положить паркет? <br/>
                        Как выбрать рисунок настенного ковра? <br/>
                        Чем закрасить окна?
                        <br/>
                        <br/>

                        Подскажи с помощью инстаграмчика! <br/>
                        Публикуй свой фейсик с крутым интерьером
                        и хештегом <u>{hashTag}</u>. Каждую неделю буду репостить 3 симпатяшные
                        фотографии, а удачливые получат по 10 XATA<span className="text-red">*</span>
                        <br/>
                        <br/>

                        <b>Помни, интерьер найденный в гугле - это не прикольно.</b> Важно то что
                        видел своими глазами, то что прочувствовал!
                    </p>

                    <div className="paragraph-special">
                        <div className="paragraph-special__item">
                            <Emojify>
                                * только если укажут кошелек Ethereum :smiling_imp:
                                или хотя бы ответят в личку, ведь это целых 2000грн!
                            </Emojify>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}