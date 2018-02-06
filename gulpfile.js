const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const pug = require('gulp-pug');
const htmlbeautify = require('gulp-html-beautify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gcmq = require('gulp-group-css-media-queries');

const config = {
  src: './src',
  dest: './dest',

  css: {
    src: '/styles/main.scss',
    dest: './dest/assets/'
  },

  html: {
    src: '/views/pages/**/*.pug',
    dest: './dest'
  },

  js: {
    src: '/assets/js/**/*',
    dest: './dest/assets/js'
  },

  img: {
    src: '/assets/img/**/*',
    dest: './dest/assets/img'
  },

  docs: {
    src: '/assets/docs/**/*',
    dest: './dest/assets/docs'
  }
}

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: config.dest
    }
  });
});

// =====================================
//              T A S K S
// =====================================

  gulp.task('pug', function() {
    gulp.src([config.src + config.html.src, '!./src/views/pages/categorie/_categorie-menu.pug'])
      .pipe(pug())
      .pipe(htmlbeautify())
      .pipe(gulp.dest(config.html.dest))
      .pipe(browserSync.reload({
        stream: true
      }));
  });

  gulp.task('sass', function() {
    gulp.src(config.src + config.css.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(gcmq())
      .pipe(autoprefixer({
        browsers: ['> 0.1%'],
        cascade: false
      }))
      // .pipe(cleanCSS())
      .pipe(gulp.dest(config.css.dest))
      .pipe(browserSync.reload({
        stream: true
      }));
  });

  gulp.task('js', function() {
    gulp.src(config.src + config.js.src)
      .pipe(gulp.dest(config.js.dest))
      .pipe(browserSync.reload({
        stream: true
      }));
  });

  gulp.task('img', function() {
    gulp.src(config.src + config.img.src)
      // .pipe(imagemin())
      .pipe(gulp.dest(config.img.dest))
      .pipe(browserSync.reload({
        stream: true
      }));
  });

  gulp.task('docs', function() {
    gulp.src(config.src + config.docs.src)
      .pipe(gulp.dest(config.docs.dest))
      .pipe(browserSync.reload({
        stream: true
      }));
  });

//

// =====================================
//       G L O B A L  T A S K S
// =====================================

  gulp.task('build', ['sass', 'pug', 'js', 'img', 'docs'], function() {
    console.log('\n\t ===  Build  === \n');
  });

  gulp.task('default', ['build']);

  gulp.task('dev', ['browser-sync', 'build'], function() {
    gulp.watch('./src/styles/**/*', ['sass']);
    gulp.watch('./src/views/**/*', ['pug']);
    gulp.watch('./src/assets/**/*', ['img', 'js']);
  });

//
