import { IDictionary, datetime } from 'common-types';
import PageTracker from './page-tracker';
import ServiceTracker from './service-tracker';

export type ServiceTrigger = 'timing' | 'polling' | 'event';
/** a descriptive dasherized name for the page */
export type PageId = string;

export interface ITrack {
  /**
   * Allows commonly visited pages to be cateloged
   */
  registerPage: (id: PageId, name: string, pageType: string, extra: IDictionary) => Promise<void>;
  /**
   * Issued on the UI's entrance to a new "page", returns a tracking ID which can be used
   * by all subsequent logging events
   */
  trackPage: (name: string, identity: string, extra: IDictionary) => string;
  /**
   * Issued on service startup, returns a tracking ID used in all subsequent calls 
   * to logging interface
   */
  trackService: (name: string, identity: string, options: IDictionary ) => string;
}

export interface ILog {
  msg: (desc: string, trackingId: string, options: IDictionary) => Promise<void>;
  error: (desc: string, trackingId: string, stack: stackTrace.StackFrame[], options: IDictionary) => Promise<void>;
  event: (name: string, trackingId: string, )
}

export default class Logger {

  public configure(config: IDictionary) {
    //
    return this;
  }

  public trackPage(name: string) {
    return new PageTracker(name);
  }

  public trackService(name: string) {
    return new ServiceTracker(name);
  }
}

const logger = new Logger();
const log = logger.configure({}).trackPage('foo');