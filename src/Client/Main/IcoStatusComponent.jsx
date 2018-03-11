import * as React from 'react';
import Numeral from 'numeral';
import classNames from 'classnames';

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

    renderStatus() {
        const {status} = this.props;
        const {hasWeb3js} = this.state;

        if (!status) {
            return (<div> - @ - </div>);
        }

        const progressLineProps = {
            className: "ico-status-progress__line",
            style: {
                width: Numeral(status.targetPercent).format('0.0%')
            }
        };

        return (<React.Fragment>
            {/*<div>{Numeral(status.targetPercent).format('0.0%')}</div>*/}
            {/*<div>{Numeral(status.totalContribution).format('0.0000')} ETH</div>*/}
            <div style={{textAlign: 'center'}}>
                Эмитировано: {Numeral(status.totalSupply).format('0.00')} XATA
            </div>

            <div className="ico-status-progress">
                <div {...progressLineProps}>
                    <div className="ico-status-progress__result">
                        ${Numeral(status.totalContributionUSD).format('0.00')}
                    </div>
                </div>

                <div className="ico-status-progress__target">
                    $150 000
                </div>
            </div>
            {/*<div>{hasWeb3js ? 'Есть MetaMask' : 'неееееет...!'}</div>*/}
        </React.Fragment>)
    }

    render() {
        const {contract} = this.props;

        const componentProps = {
            className: classNames({
                'ico-status': true,
                '-loaded': this.state.loaded
            })
        };

        return (
            <div {...componentProps}>
                <div className="ico-status-contract">
                    <p className="ico-status-contract__desc">Адрес контракта ICO</p>
                    <input readOnly={true} value={contract} type="text" className="ico-status-contract__address"/>
                </div>

                {this.renderStatus()}
            </div>
        )
    }
}
