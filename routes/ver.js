var express = require('express');
var router = express.Router();
[DB_PART_COMES_HERE]

var crypto = require('crypto')

/* UTILITY FUNCTIONS */
function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '')
            .toLowerCase()
            .match(/<[a-z][a-z0-9]*>/g) || [])
        .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '')
        .replace(tags, function($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });
}

function json_encode(mixed_val) {
    return JSON.stringify(mixed_val);
}
/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(appRoot + '/public/index.html');
});
/* SERVICE ENDPOINTS */
[ENDPOINT_CODE_COMES_HERE]



module.exports = router;
