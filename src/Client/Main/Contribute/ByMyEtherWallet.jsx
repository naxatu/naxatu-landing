import * as React from 'react';
import q from 'query-string';

export class ByMyEtherWallet extends React.Component {

    render() {
        const {to, value, className} = this.props;

        const params = q.stringify({
            to: to,
            value: value,
            gas: "80000",
            gasprice: "8"
        });

        const myEtherWalletUrl = `https://www.myetherwallet.com/?${params}#send-transaction`;

        return (
            <a href={myEtherWalletUrl} target="_blank" className={className}>MyEtherWaller</a>
        )
    }
}
