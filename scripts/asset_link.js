'use strict';
var cheerio = require('cheerio');

// source link: https://github.com/xcodebuild/hexo-asset-image

// http://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string
function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
}

hexo.extend.filter.register('after_post_render', function(data) {
    var config = hexo.config;
    var theme = hexo.theme.config

    let enabled = true
    enabled &= config.post_asset_folder
    enabled &= data.layout in theme.relative_asset_link_layouts
    enabled &= theme.relative_asset_link_layouts[data.layout]

    if(enabled) {
        var link = data.permalink;
        link = link.substr(getPosition(link, '/', 3) + 1)
        link = link.replace(/\.html$/, '')
        link += '/';

        // 处理bg字段(in Front-Matter)
        if(typeof data.bg == 'string' && data.bg != '')
        {
            if(!data.bg.startsWith('http'))
            {
                data.bg = config.root + link + data.bg
                console.info("update bg link for: "+data.title);
            }
        }

        var toprocess = ['excerpt', 'more', 'content'];
        for(var i = 0; i < toprocess.length; i++){
            var key = toprocess[i];

            var $ = cheerio.load(data[key], {
                ignoreWhitespace: false,
                xmlMode: false,
                lowerCaseTags: false,
                decodeEntities: false
            });

            $('img').each(function() {
                if ($(this).attr('src')){
                    // For windows style path, we replace '\' to '/'.
                    var src = $(this).attr('src').replace('\\', '/');
                    if(!(/^https?:\/\/.*/.test(src))) {
                        // In addition, to support multi-level local directory.
                        var srcArray = src.split('/').filter(function(elem){
                            return elem != '' && elem != '.';
                        })

                        if(srcArray.length > 1)
                            srcArray.shift();
                        src = srcArray.join('/');

                        $(this).attr('src', config.root + link + src);
                        console.info&&console.info("update img link as: "+config.root + link + src);
                    }
                }else{
                    // console.info&&console.info("no src attr, skipped...");
                    // console.info&&console.info($(this));
                }
            });

            $('a').each(function(){
                if ($(this).attr('href')){
                    // For windows style path, we replace '\' to '/'.
                    var src = $(this).attr('href').replace('\\', '/');
                    if(!(/^https?:\/\/.*/.test(src) || /^#.*/.test(src))) {
                        // In addition, to support multi-level local directory.
                        var srcArray = src.split('/').filter(function(elem){
                            return elem != '' && elem != '.';
                        })

                        if(srcArray.length > 1)
                            srcArray.shift();
                        src = srcArray.join('/');

                        $(this).attr('href', config.root + link + src);
                        console.info&&console.info("update link as: "+config.root + link + src);
                    }
                }else{
                    // console.info&&console.info("no src href, skipped...");
                    // console.info&&console.info($(this));
                }
            });

            data[key] = $.html();
        }
    }
})