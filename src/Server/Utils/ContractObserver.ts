import {config} from '../Config'

export class ContractObserver {
    protected _contract: string;

    constructor(contract: string) {
        this._contract = contract;
    }

    get contract(): string {
        return this._contract;
    }

    set contract(value: string) {
        this._contract = value;
    }
}

const contractInstance = new ContractObserver(config.get('app.contract'));

export {
    contractInstance
}