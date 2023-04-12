const { src, dest, watch} = require("gulp");
const  sass = require("gulp-sass")(require('sass')); //importa
const  plumber = require('gulp-plumber');

function css(done) {
    src("src/scss/**/*.scss")//1. identificar el archivo de SASS: src
    .pipe(plumber())
    .pipe(sass())//2. Compilarlo:pipe
    .pipe(dest("build/css"))//3. Almacenarla en el disco duro: dest


    done(); //callback que avisa a gulp cuando llega al final la ejecución de la fx
}

function dev(done){
    watch("src/scss/**/*.scss", css)


    done();
}

exports.css = css;
exports.dev = dev;