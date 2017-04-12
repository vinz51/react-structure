var express = require('express');
var path    = require('path');
var
    app   = express(),
    port  = 4400
;

if ( process.env.NODE_ENV !== 'production' ) {

    var
        webpack                     = require('webpack'),
        webpackDevMiddleware        = require('webpack-dev-middleware'),
        webpackHotMiddleware        = require('webpack-hot-middleware'),
        webpackConfig               = require('./webpack.config')
    ;

    var compiler                    = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler));
}

// Use this for assets
app.use(express.static('public'));
// Contain bundle.js
app.use(express.static('static'));

app.get( '*', function( req, res ) {
    res.sendFile(path.join(__dirname, 'index.html'));
} );

// Listen on the 4400's port
app.listen( port, function(error) {

    if ( error )
    {
        console.error( error );
    }
    else
    {
        console.log( 'Listenning on port %s. See on http://localhost:%s/ in your browser. ', port, port );
    }

} );
