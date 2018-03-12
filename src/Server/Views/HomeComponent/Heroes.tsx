import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class Heroes extends React.Component<any, any> {
    render() {
        return (
            <section className="section -heroes heroes" id="heroes">
                <div className="section-content">
                    <div className="topic -left -small">
                        <h2 className="topic-title">Помни своих героев</h2>
                    </div>

                    <p className="paragraph">
                        Когда будет проводиться ремонт хаты, я выберу самую видную стену в гостиной и сделаю
                        на ней облако-коллаж в виде логотипа Ethereum
                        с именами<span className="text-red">*</span> участников краудсела. {' '}
                        <Emojify>Что бы всегда помнить о тех, кто купил мне хату :cry:</Emojify>
                        <br/><br/>

                        Размер имени будет зависеть от объема вклада в общее дело.
                        <br/><br/>

                        Ваше имя или псевдоним можно сообщить мне в любое время, связавшись со мной.
                    </p>

                    <div className="paragraph-special">
                        <p className="paragraph-special__item">
                            * в качестве имени (псевдонима) нельзя использовать:
                            <br/> - ругательства;
                            <br/> - фразы что могут задеть чувства верующих, нац. меньшинств, крипто хомяков;
                            <br/> - фразы разжигающие национальную или расовую рознь;
                            <br/> - имена политиков и публичных личностей (если это не ваше собственное).
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}