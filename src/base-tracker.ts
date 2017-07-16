import { IDictionary, STAGE } from 'common-types';
import * as stackTrace from 'stack-trace';
import {key as getFirebaseKey} from 'firebase-key';
import Config from './config';

export default abstract class BaseTracker {
  protected _config: IDictionary;
  protected _sessionId: string;

  constructor(public name: string, public identity: string, protected _stage: STAGE ) {
    this._sessionId = getFirebaseKey();
    this._config = Config.getConfiguration(this._stage);
  }

  public get sessionId() {
    return this._sessionId;
  }

  public msg(message: string, extra?: IDictionary) {
    if(this._config.msg.console) {
      console.log(`${this._preRoll}${message}${this._postRoll}`);
      if (extra) {
        console.log(`${this._addendum}${JSON.stringify(extra, null, 2)}`);
      }
    }
  }

  public debug(message: string, extra?: IDictionary) {
    //
  }

  public warn(message: string, extra?: IDictionary) {
    //
  }

  public error(message: string, stack: stackTrace.StackFrame[], extra?: IDictionary ) {
    //
  } 

  protected _preRoll() {
    return `[${this.name}, ${this.sessionId}]`;
  }

  protected _postRoll() {
    return '';
  }

  protected _addendum() {
    return '\n';
  }
}