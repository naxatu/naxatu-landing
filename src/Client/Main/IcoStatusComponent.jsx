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

        return (<React.Fragment>
            <div>{Numeral(status.targetPercent).format('0.0%')}</div>
            <div>{Numeral(status.totalContribution).format('0.0000')} ETH</div>
            <div>${Numeral(status.totalContributionUSD).format('0.00')}</div>
            <div>{hasWeb3js ? 'Есть MetaMask' : 'неееееет...!'}</div>
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
                <div>
                    <input readOnly={true} value={contract} type="text" className="ico-status__contract-address"/>
                </div>

                {this.renderStatus()}
            </div>
        )
    }
}
