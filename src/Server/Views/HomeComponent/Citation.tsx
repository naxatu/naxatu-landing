import * as React from 'react';
import * as i18n from 'i18n';
import {Emojify} from '../../Utils/Emojify';

export class Citation extends React.Component<any, any> {

    render() {
        return (
            <section className="section -citation citation" id="citation">
                <div className="section-content">
                    <article className="citation-body">
                        <p className="citation-quote">
                            {i18n.__("Если ты живешь на съемной хате и нет возможности купить собственную, то заявляй, что собираешь на хату через ICO — и все у тебя будет хорошо.")}
                        </p>

                        <span className="citation-author">
                            {i18n.__("Вот так бы мог сказать")} {' '}
                            <a href="https://www.facebook.com/dubilet/posts/10156243052293552" target="_blank" className="link">
                               {i18n.__("Дмитрий Дубилет")}
                            </a>
                        </span>
                    </article>
                </div>
            </section>
        )
    }
}