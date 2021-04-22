const {src,dest} = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
//const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
//const plumber = require('gulp-plumber'); //"gulp-plumber": "^1.2.1",

sass.compiler = require('dart-sass');//Este compilador permite use
//'./sass/**/*.scss' 
function css() {
  return src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename("main.min.css"))
    .pipe(dest('./css'));
};
 
function js(){
	return src('./js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('./js'));
}

//"!.js/vendor/**","!.js/install.js"
function build_js(){
	return src(["./js/utils/*.js","./js/data/*.js","./js/main.js"])
    .pipe(concat('main.min.js'))
    .pipe(dest('./js'))
    .pipe(uglify())
    .pipe(dest('./js'));
    //.pipe(plumber())
}

exports.css = css;
exports.js = build_js;
exports.default = ()=>{};
