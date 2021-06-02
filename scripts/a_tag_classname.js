'use strict';
var cheerio = require('cheerio');

hexo.extend.filter.register('after_post_render', function(data) {
    var config = hexo.config;
    var theme = hexo.theme.config

    for (const k of ['excerpt', 'more', 'content'])
    {
        var content = data[k];

        var $ = cheerio.load(data[k], {
            ignoreWhitespace: false,
            xmlMode: false,
            lowerCaseTags: false,
            decodeEntities: false
        });
    
        $('a').each(function(){
            $(this).addClass('bubble-link')
        })

        data[k] = $.html();
    }
})