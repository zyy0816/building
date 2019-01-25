const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');//css兼容自动补全
const cleanCss = require('gulp-clean-css');//css压缩

// gulp.task('default',()=>{
//    console.log('this is gulp');
//    gulp.src(['src/**/*'])
//     .pipe(gulp.dest('build'));
// })

gulp.task('less', () => {
    gulp.src(['src/**/*.less'])
        .pipe(less())
        .pipe(autoprefixer({ 
            browsers: ['last 5 versions','Firefox > 20']
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('build'));
})

gulp.task('clean', () => {
    del.sync('build');// "gulp":"rm -rf build && gulp"
})

gulp.task('default', ['clean','less'], () => {
    console.log('done!');
});

gulp.task('watch',()=>{
    const watcher = gulp.watch('src/**/*', ['default']);
    watcher.on('change',  event => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})
