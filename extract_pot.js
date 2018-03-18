const {
    GettextExtractor,
    JsExtractors,
    HtmlExtractors
} = require('gettext-extractor');

let extractor = new GettextExtractor();

extractor
    .createJsParser([
        JsExtractors.callExpression('getText', {
            arguments: {
                text: 0,
                context: 1
            }
        }),
        JsExtractors.callExpression('i18n.__', {
            arguments: {
                text: 0,
                context: 1
            }
        }),
        JsExtractors.callExpression('getPlural', {
            arguments: {
                text: 1,
                textPlural: 2,
                context: 3
            }
        }),
        JsExtractors.callExpression('i18n.__n', {
            arguments: {
                text: 1,
                textPlural: 2,
                context: 3
            }
        })
    ])
    .parseFilesGlob('./src/**/*.@(ts|js|tsx|jsx)');

extractor
    .createHtmlParser([
        HtmlExtractors.elementContent('translate, [translate]')
    ])
    .parseFilesGlob('./src/**/*.html');

extractor.savePotFile('./locales/messages.pot');

extractor.printStats();