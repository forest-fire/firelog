import 'mocha';
import { IDictionary, ENV } from 'common-types';
import * as chai from 'chai';
import * as helpers from './testing/helpers';
import PageTracker from '../src/page-tracker';
import ServiceTracker from '../src/service-tracker';

const expect = chai.expect;

describe('Base Tracker: Basics', () => {
  it('get a sessionID at instantiation', () => {
    const pt = new PageTracker('test-id', 'identity', ENV.test);
    const st = new ServiceTracker('test-id', 'identity', ENV.test);
    expect(pt.sessionId).is.a('string');
    expect(st.sessionId).is.a('string');
  });
  
  it('identity and name are exposed as public attributes', () => {
    const pt = new PageTracker('test-id', 'identity', ENV.test);
    const st = new ServiceTracker('test-id', 'identity', ENV.test);
    expect(pt.identity).is.equal('identity');
    expect(st.identity).is.equal('identity');
    expect(pt.name).is.equal('test-id');
    expect(st.name).is.equal('test-id');
  });

});

describe('Base Tracker: Messaging', () => {

  it.skip('msg() -- with default config -- logs to console');
  it.skip('msg() -- with default config -- does NOT send to Firebase');
  it.skip('msg() -- when configured -- does send to Firebase');
  
})