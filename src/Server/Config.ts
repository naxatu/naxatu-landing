import * as path from 'path';
import * as fs from 'fs';

const deepAssign = require('deep-assign');
const yaml = require('js-yaml');


class ConfigObserver {
    protected config: any;

    constructor() {
        this.config = {};
    }

    /**
     * @param {string} key
     * @param value
     * @returns {this}
     */
    set(key: string, value: any): ConfigObserver {
        this.merge({key: value});

        return this;
    }

    /**
     * @param newValues
     * @returns {this}
     */
    merge(newValues: any): ConfigObserver {
        this.config = deepAssign({}, this.config, newValues);

        return this;
    }

    /**
     * @param {string} filePath
     */
    loadFile(filePath: string): ConfigObserver {
        try {
            const configValue = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
            this.merge(configValue);
        } catch (error) {
            console.error(error);
        }

        return this;
    }

    get(key: string | string[]): any {
        return this.getImpl(this.config, key);
    }

    /**
     * @param object
     * @param {string | string[]} key
     * @returns {any}
     */
    protected getImpl(object: any, key: string | string[]): any {
        const elems: Array<string> = Array.isArray(key) ? key : key.split('.'),
            name = elems[0],
            value = object[name];

        if (elems.length <= 1) {
            return value;
        }

        // Note that typeof null === 'object'
        if (value === null || typeof value !== 'object') {
            return undefined;
        }

        return this.getImpl(value, elems.slice(1));
    }
}


export const config = new ConfigObserver();

const configPath = path.join(__dirname, '../../config/');

config
    .loadFile(path.join(configPath, 'app.yml'))
    .loadFile(path.join(__dirname, '../../.env.yml'));
