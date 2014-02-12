
/*
 Example of using google apis module to discover the URL shortener module, and shorten
 a url
 @param params.url : the URL to shorten
 */
exports.googleapis = function(params, cb){
  var googleapis = require('googleapis');
  googleapis
          .discover('urlshortener', 'v1')
          .execute(function(err, client) {
            var req1 = client.urlshortener.url.insert({ longUrl: params.url });

            req1.execute(cb);
          });
};
