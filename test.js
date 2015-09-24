var express = require('express');

var app = express();

var port = process.env.PORT || 3030;

var knex = require('knex')({
        debug: true,
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'postgres',
            port: 5432,
            database: 'test_courses',
            charset  : 'utf8'
        }
    }
);

var PostGre = require('bookshelf')(knex);
app.set('PostGre', PostGre);

var Model = require('./models/index');
PostGre.Models = new Model(PostGre);

require('./routes')(app);

app.listen(port, function () {
    console.log("Express server listening on port " + port);
    console.log("HOST: " + "http://localhost:" + port);
});


