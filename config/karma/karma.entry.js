require('core-js/es6/array');
require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/string');
require('core-js/es6/symbol');
require('core-js/es7/reflect');
require('core-js/fn/array/includes');
require('core-js/fn/object/assign');
require('zone.js');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

const browser = require('@angular/platform-browser-dynamic/testing');
const testing = require('@angular/core/testing');

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

testing.setBaseTestProviders(
    browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);


const context = require.context('../../test/ts/', true, /\.spec.ts$/);

context.keys()
    .forEach(context);