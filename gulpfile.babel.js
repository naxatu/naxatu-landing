import gulp from 'gulp';
import Path from 'path';
import sass from 'gulp-sass';

import * as PotExtractor from './pot-extractor';

const PATH = {
    SOURCE: Path.join(__dirname, './src'),
    TARGET: Path.join(__dirname, './dist'),
    PUBLIC: Path.join(__dirname, './public')
};

gulp.task('copy', copyTask({
    source: './public/',
    destinations: ['./dist/public'],
    // pattern: '/*',
}));

gulp.task('locales', copyTask({
    source: './locales/',
    destinations: ['./dist/locales'],
    // pattern: '/*',
}));

gulp.task('pot', () => {
    PotExtractor.extract();
});

gulp.task('build', ['copy', 'locales']);

function copyTask(opts) {
    const {
        source,
        destination,
        destinations = [destination],
        pattern = '**/*'
    } = opts;

    return () => {
        let stream = gulp.src(source + pattern, {base: source});
        destinations.forEach((destination) => {
            stream = stream.pipe(gulp.dest(destination))
        });

        return stream
    }
}