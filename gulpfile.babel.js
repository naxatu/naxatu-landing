import gulp from 'gulp';
import Path from 'path';
import sass from 'gulp-sass';

const PATH = {
    SOURCE: Path.join(__dirname, './src'),
    TARGET: Path.join(__dirname, './dist'),
    PUBLIC: Path.join(__dirname, './public')
};


gulp.task('css', () => {
    return gulp
        .src([
            './src/Client/Style/main.scss',
            './src/Client/Style/critical.scss'
        ])
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/public/css'));
});


gulp.task('copy', copyTask({
    source: './public/',
    destinations: ['./dist/public'],
    // pattern: '/*',
}));

gulp.task('build', ['copy', 'css']);


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