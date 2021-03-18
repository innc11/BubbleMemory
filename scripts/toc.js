'use strict';

const { tocObj, escapeHTML, encodeURL } = require('hexo-util');


function generateToc(text, className)
{
    className = className || 'toc'

    let data = tocObj(text, { min_depth: 1, max_depth: 6 });

    if(data.length == 0)
        return ''

    let result = `<ul class="${className}">`;

    const lastNumber = [0, 0, 0, 0, 0, 0];
    let firstLevel = 0;
    let lastLevel = 0;

    for (let el of data) {
        let { level, id, text } = el;
        let href = id ? encodeURL(id) : null;

        lastNumber[level - 1]++;

        for (let i = level; i <= 5; i++) {
            lastNumber[i] = 0;
        }

        if (firstLevel) {
            for (let i = level; i < lastLevel; i++) {
                result += '</li></ul>';
            }
      
            if (level > lastLevel) {
                result += `<ul class="${className}-child">`;
            } else {
                result += '</li>';
            }
        } else {
            firstLevel = level;
        }

        result += `<li class="${className}-item ${className}-level-${level}">`;
        if (href) {
            // result += `<a name="tocname-${href}" class="${className}-link" href="#${href}">`;
            result += `<a name="tocname-${href}" class="${className}-link" href="javascript:jumpto('${href}')">`;
        } else {
            result += `<a name="tocname-${href}" class="${className}-link">`;
        }

        result += `${text}</a>`;

        lastLevel = level;
    }

    for (let i = firstLevel - 1; i < lastLevel; i++) {
        result += '</li></ul>';
    }
    
    return result;
}

hexo.extend.helper.register('generateToc', generateToc);