import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class Team extends React.Component<any, any> {
    render() {
        return (
            <section className="section -team team" id="team">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Команда мечты</h2>
                        <p className="topic-desc">
                            Сбор средств на хату &mdash; это трудоемкий процесс, требующий тщательной подготовки
                            и слаженной команды. Поэтому, у нас лучшая команда, о которой только можно мечтать
                        </p>
                    </div>

                    <div className="team-list">
                        <article className="team-person">
                            <img src="/image/ceo-team.png" className="team-person-image"
                                 title="Весь из себя такой красавчик, аж не вериться. Ух какой!"
                                 alt="Handsome Maksym Tymchyk"
                            />

                            <div className="team-person-desc">
                                <h3 className="team-person__name">Maksym Tymchyk</h3>
                                <h4 className="team-person__jobs">
                                    Founder, Co-founder, CEO, CTO, CFO, COO, Designer, Tech lead, DevOps,
                                    Blockchain developer, Front-end engineer, NodeJS engineer,
                                    Content Manager, <s>Copyright</s>, Researcher, Office manager, Cooker, Bartender
                                </h4>

                                <p className="team-person__bio">
                                    Идеолог блокчейна и технологий на его базе.<br/>
                                    Full-stack душой и делом.
                                </p>

                                <div className="team-person__social">
                                    <a href="https://fb.com/maksym.tymchyk"
                                       className="team-person__social-item"
                                       title="Лицокнига"
                                       target="_blank"><i className="fab fa-facebook-square"/></a>

                                    <a href="https://www.linkedin.com/in/maksym-tymchyk-66081152/"
                                       className="team-person__social-item"
                                       title="Социальная сеть для офисного планктона О_о"
                                       target="_blank"><i className="fab fa-linkedin"/></a>

                                    <a href="https://github.com/m-tymchyk"
                                       className="team-person__social-item"
                                       title="Место, где творю, где воплощается моя фантазия"
                                       target="_blank"><i className="fab fa-github"/></a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}