var express = require('express');
var router = express.Router();
var Schema_DataSource_3758686 = require('../databases/Schema_DataSource_3758686.js');


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

	/**
	 * Please provide endpoint description
	 * 
	 * @author Kurniawan
	 * @version 1.0 2016-11-09 06:13:33
	 */				
	
router.route("/ip/:i_nim").get(function(req,res)
{ 
	var i_nim = req.params.i_nim; 
	var p_start = req.query.p_start;
	var p_count = req.query.p_count;
	if(p_start === undefined)
		p_start = 0;
	else
		p_start = parseInt(p_start);	
	if(p_count === undefined)
		p_count = 50;
	else
		p_count = parseInt(p_count);
		Schema_DataSource_3758686.model.query("SELECT `nim` AS `nim`, `nama` AS `nama`, `ttl` AS `ttl`, `ip` AS `ip`" + 
 		" FROM `ip` "
 + " WHERE ip.nim = ?  "
 + " LIMIT ?, ? ",[i_nim,p_start,p_count],function(err,rows){ 
	var result = {}; 
	if(err !== null) 
	{ 
		result.error = err; 
	} 
	else  
	{ 
		result.results = rows; 
	} 
	res.setHeader('content-type','text/json'); 
	res.send(json_encode(result)); 
	});
		
});
	/**
	 * Please provide endpoint description
	 * 
	 * @author Kurniawan
	 * @version 1.0 2016-11-09 06:13:33
	 */				
	
router.get("/ip/",function(req,res)
{ 
	var p_start = req.query.p_start;
	var p_count = req.query.p_count;
	if(p_start === undefined)
		p_start = 0;
	else
		p_start = parseInt(p_start);	
	if(p_count === undefined)
		p_count = 50;
	else
		p_count = parseInt(p_count);
		Schema_DataSource_3758686.model.query("SELECT `nim` AS `nim`, `nama` AS `nama`, `ttl` AS `ttl`, `ip` AS `ip`" + 
 		" FROM `ip` "
 + " LIMIT ?, ? ",[p_start,p_count],function(err,rows){ 
	var result = {}; 
	if(err !== null) 
	{ 
		result.error = err; 
	} 
	else  
	{ 
		result.results = rows; 
	} 
	res.setHeader('content-type','text/json'); 
	res.send(json_encode(result)); 
	});
		
});




module.exports = router;
