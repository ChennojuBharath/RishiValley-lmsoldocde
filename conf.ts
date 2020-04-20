import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config: Config = {
    allScriptsTimeout: 25000,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        //isVerbose: false,
        showColors: true,
        //includeStackTrace: false,
        getPageTimeout: 15000,
        defaultTimeoutInterval: 250000,
        print: function () { }
    },

    onPrepare: () => {
        // Use `jasmine-spec-reporter` as the spec result reporter
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './Reports',
            screenshotsFolder: './screenshots',
            takeScreenshotsOnlyOnFailures: true
        }))
    },
    params: {
        baseUrl: 'http://rvlms.walkingtree.tech/'

    },
    specs: ['Specs/**/login.spec.js',
        //'Specs/**/logout.spec.js',
        //'Specs/**/fillintheblanks.spec.js',
        // 'Specs/**/rearranging.spec.js',
        // 'Specs/**/trueorfalse.spec.js',
        // 'Specs/**/Multiplechoice.spec.js',
        // 'Specs/**/sorting.spec.js',
        // 'Specs/**/TapandListen.spec.js',
        //  'Specs/**/matchthefollowing.spec.js',
        // 'Specs/**/logout.spec.js',
        //'Specs/**/taskreviewer.spec.js',
        //'Specs/**/taskapprover.spec.js',
          //'Specs/**/courseapproval.spec.js',
          //'Specs/**/createcourse.spec.js',
        //'Specs/**/focuscards.spec.js',
        //'Specs/**/kitdetails.spec.js',
        'Specs/**/resources.spec.js',
        //'Specs/**/assets.spec.js'

    ],
    seleniumAddress: 'http://localhost:4444/wd/hub'
}