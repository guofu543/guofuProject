let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
// let uglify = require("gulp-uglify");
// let babel = require("gulp-babel");
let sass = require("gulp-sass");

gulp.task("copy-icon",async() =>{
    gulp.src("./src/icon/**/*")
    .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\myProject\\icon"))
})

gulp.task("copy-img",async ()=>{
    gulp.src("./src/images/**/*")
    .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\myProject\\images"))
})

gulp.task("watch-all",async ()=>{
    gulp.watch("./src/*.html",async()=>{
        gulp.src("./src/*.html")
        .pipe(htmlmin())
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\myProject"))
    })

    gulp.watch("./src/*.php",async()=>{
        gulp.src("./src/*.php")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,  
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true, 
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true, 
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\myProject"))
    })

    gulp.watch("./src/js/**/*",async()=>{
        gulp.src("./src/js/**/*")
        // .pipe(babel({
        //     presets:['@babel/env']
        // }))
        // .pipe(uglify())
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\myProject\\js"))
    })

    gulp.watch("./src/css/*.scss",async()=>{
        gulp.src("./src/css/*.scss")
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\myProject\\css"))
    })
})