import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

const challengeLink = "https://www.instagram.com/explore/tags/собираюнахату/";
const instagramLinkComponent = <a href={challengeLink} className="link" target="_blank">#собираюнахату</a>;

export class Challenge extends React.Component<any, any> {
    render() {
        return (
            <section className="section -challenge challenge" id="challenge">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">{instagramLinkComponent} челендж</h2>
                    </div>
                    <p>Помогите мне выбрать интерьер квартиры!</p>
                    <p>
                        Бьюсь в догадках, какого же цвета паркет положить, или как выбрать
                        рисунок настенного ковра.
                    </p>
                    <p>
                        Публикуй в инстаграме свои фотографии с крутым интерьером
                        с хештегом {instagramLinkComponent}. Каждую неделю буду репостить 3 самые
                        понравившиеся фотографии, а счастливчики получат по 10 XATA.
                    </p>
                    <p>
                        <b>Помни, интерьер найденный в гугле - это не прикольно.</b> Важно то что
                        видел своими глазами, то что прочувствовал!
                    </p>
                </div>
            </section>
        )
    }
}