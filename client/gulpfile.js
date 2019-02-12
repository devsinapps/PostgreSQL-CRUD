const gulp 	= require('gulp'),
	  sass 	= require('gulp-sass'),
	  minifyCSS = require('gulp-minify-css'),
	  watch = require('gulp-watch');

gulp.task('sass', ()=>{
	gulp.src('src/components/style/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/components/style/css'))
})

gulp.task('minifyCSS', ()=>{
	gulp.src('src/components/style/css/main.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('src/components/style/minify'))
})

gulp.task('watch', ()=>{
	gulp.watch('src/components/style/main.scss', ['sass'])
	gulp.watch('src/components/style/css/main.css', ['minifyCSS'])
})