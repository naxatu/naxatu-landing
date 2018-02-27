import * as React from 'react';

export class Intro extends React.Component {
    render() {
        return (
            <section className="section -intro intro" id="intro">
                <div className="intro-background">
                    <img src="/image/bg-intro.jpg" className="intro-background__image" alt=""
                         title="Собираю вот на такую хату"/>
                </div>
                <div className="section-content intro-content">
                    <img src="/image/logo-white.svg" title="XATA" className="intro-logo"/>
                    <div className="topic">
                        <h1 className="topic-title">Собираю на Хату</h1>
                    </div>
                </div>
            </section>
        )
    }
}