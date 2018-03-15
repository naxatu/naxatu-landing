import * as React from 'react';
import Numeral from 'numeral';
import classNames from 'classnames';
import * as Constants from './Contants';

export class IcoStatusComponent extends React.Component {

    state = {
        loaded: false,
        hasWeb3js: false
    };

    web3js;

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return {loaded: true};
            });
        }, 100);

        if (typeof web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3js = new Web3(web3.currentProvider);
            this.setState(() => {
                return {hasWeb3js: true};
            });
        }
    }

    render() {
        const {contract, status} = this.props;
        const {hasWeb3js} = this.state;

        if (!status) {
            return (<div> - @ - </div>);
        }

        const progressLineProps = {
            className: "ico-status-progress__line",
        };

        const componentProps = {
            className: classNames({
                'ico-status': true,
                '-loaded': this.state.loaded
            })
        };

        return (
            <div {...componentProps}>
                <p className="ico-info">
                    <b>Цена XATA:</b> 1 ETH = 100 XATA ( + бонус)
                </p>

                <div className="ico-status__progress-wrapper">
                    <div className="ico-status-percentage">{Numeral(status.targetPercent).format('0.0%')}</div>
                    <div className="ico-status-progress">
                        <div className="ico-status-progress__line">
                            <div className="ico-status-progress__line-fill"
                                 style={{width: Numeral(status.targetPercent).format('0.000%')}}
                            />
                        </div>
                        <div className="ico-status-progress__target">
                            Цель: <b>${Numeral(Constants.TARGET).format('0,0')}</b>
                        </div>
                    </div>
                </div>

                <div className="ico-status-items">
                    <div className="ico-status-item">
                        <div className="ico-status-item__value">
                            {Numeral(status.totalContribution).format('0.0000')} ETH
                        </div>
                        <h4 className="ico-status-item__name">Собрано ETH</h4>
                    </div>

                    <div className="ico-status-item">
                        <div className="ico-status-item__value">
                            {Numeral(status.sqrM).format('0,0')} М<sup>2</sup>
                        </div>
                        <h4 className="ico-status-item__name">Можно купить М<sup>2</sup></h4>
                    </div>

                    <div className="ico-status-item">
                        <div className="ico-status-item__value">
                            {Numeral(status.totalSupply).format('0,0.00')} XATA
                        </div>
                        <h4 className="ico-status-item__name">
                            Эмитировано XATA <br/>
                            (в том числе <b>{Numeral(status.totalBonusTokensIssued).format('0,0.00')} XATA</b> бонусов)</h4>
                    </div>
                </div>
            </div>
        )
    }
}
