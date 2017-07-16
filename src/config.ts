import { IDictionary, STAGE} from 'common-types';
import * as process from 'process';

export interface IConfig {
  stage: STAGE;
  defaults: IStageConfig;
  specifics: IStageConfig;
}

export interface IStageConfig {
  foo: string;
}

const defaultConfig = {
  dev: {
    debug: { console: true, db: false },
    msg: { console: true, db: false },
    warn: { console: true, db: true },
    error: { console: true, db: true },
    event: { console: false, db: true },
  },
  test: {
    debug: { console: false, db: false },
    msg: { console: true, db: false },
    warn: { console: true, db: true },
    error: { console: true, db: true },
    event: { console: false, db: true },
  },
  stage: {
    debug: { console: false, db: false },
    msg: { console: true, db: false },
    warn: { console: true, db: true },
    error: { console: true, db: true },
    event: { console: false, db: true },
  },
  prod: {
    debug: { console: false, db: false },
    msg: { console: true, db: false },
    warn: { console: true, db: true },
    error: { console: true, db: true },
    event: { console: false, db: true },
  }
}

export default class Config {
  public static getConfiguration(stage: STAGE) {
    const userConfig = process.env.FIRELOG 
    return { ...defaultConfig, ...userConfig };
  }
}