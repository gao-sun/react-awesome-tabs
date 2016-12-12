const gulp = require('gulp');
const gulpif = require('gulp-if');
const minifyCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const source = require("vinyl-source-stream");
const buffer = require('vinyl-buffer');
const assign = require('lodash.assign');

const paths = {
	test: 'src/js/test.js',
	js: 'src/js/react-awesome-tabs.js',
	sass: 'src/sass/**/*.scss',
};

const debug = false;

gulp.task('set-node-env', function() {
	return process.env.NODE_ENV = debug ? 'development' : 'production';
});

// Build Tasks
gulp.task('sass', function() {
	return gulp.src(paths.sass)
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 10 versions'],
		cascade: false
	}))
	.pipe(minifyCss())
	.pipe(gulp.dest('dist/'));
});

// Watchify
const babelConfig = { 
	presets: ['es2015', 'react'], 
	plugins: ['transform-class-properties'],
	ignore: /(node_modules)/
};
const customOpts = {
	entries: debug ? paths.test : paths.js,
	debug: debug,
};
const opts = assign({}, watchify.args, customOpts);

const b = watchify(browserify(opts));

b.on('update', bundle);
b.on('log', gutil.log);
b.transform('babelify', assign({}, babelConfig));

// Bundle Function
function bundle() {
	return b
		.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('react-awesome-tabs.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
}

gulp.task('app', ['set-node-env'], () => {
	if(!debug) {
		return gulp.src(paths.js)
			.pipe(babel(assign({}, babelConfig)))
			.pipe(uglify())
			.pipe(gulp.dest('dist/'));
	}

	return bundle();
});

// Whole build
gulp.task('build', ['sass', 'app']);

gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['build', 'watch']);