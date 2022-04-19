
const fs = require('fs');
var dict;
fs.readFile('./data.json', 'utf8', function (err, contents) {
    if (err) {
        // we have a problem because the Error object was returned
    } else {
        dict = JSON.parse(contents);
        console.log(dict)
    }
});
const KEY_CULTURE = "culture";

var appRouter = function (app) {
    app.get("/", function (req, res) {
        var headers = req.headers;
        var defaultCulture = "en-US";
        var greeting = dict[defaultCulture];
        if (headers && headers[KEY_CULTURE] && dict[headers[KEY_CULTURE]]) {
            greeting = dict[headers[KEY_CULTURE]];
        }
        res.status(200).send(`${greeting} to our restful API`);
    });
}

module.exports = appRouter;