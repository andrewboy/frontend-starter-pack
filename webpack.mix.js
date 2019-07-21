let mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug');

mix.disableNotifications()

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .pug('resources/assets/pug/**/*.pug', 'public', {
        // ext: '.blade.php',
        // seeds:'resources/assets/seeds',
        pug: {
            pretty: true,
        }
    });