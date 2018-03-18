import * as React from 'react';
import * as i18n from "i18n";
import {Emojify} from '../../Utils/Emojify';

export class Heroes extends React.Component<any, any> {
    render() {
        return (
            <section className="section -heroes heroes" id="heroes">
                <div className="section-content">
                    <div className="topic -left -small">
                        <h2 className="topic-title">{i18n.__("Помни своих героев")}</h2>
                    </div>

                    <p className="paragraph">
                        {i18n.__("Когда будет проводиться ремонт хаты, я выберу самую видную стену в гостиной и сделаю на ней облако-коллаж в виде логотипа Ethereum с именами участников* краудсела.")}
                        {' '}{i18n.__("Чтобы всегда помнить о тех, кто купил мне хату")} <Emojify>:cry:</Emojify>
                        <br/><br/>

                        {i18n.__("Размер имени будет зависеть от объема вклада в общее дело.")}
                        <br/><br/>

                        {i18n.__("Ваше имя или псевдоним можно сообщить мне в любое время, связавшись со мной.")}
                    </p>

                    <div className="paragraph-special">
                        <p className="paragraph-special__item">
                            * {i18n.__("в качестве имени (псевдонима) нельзя использовать:")}
                            <br/> - {i18n.__("ругательства")};
                            <br/> - {i18n.__("фразы, что могут задеть чувства верующих, нац. меньшинств, крипто-хомяков")};
                            <br/> - {i18n.__("фразы, разжигающие национальную или расовую рознь")};
                            <br/> - {i18n.__("имена политиков и публичных личностей (если это не ваше собственное).")}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}