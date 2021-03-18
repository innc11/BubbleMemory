const cheerio = require('cheerio')

hexo.extend.filter.register('after_render:html', function(str, data) {
    if (data.page.friends) {
        let $ = cheerio.load(str)

        $('table').each(function(index1, el1) {
            let output = ''

            $(this).find('tr').each(function(index, el) {
                let row = $(this).find('td')

                if (row.length >= 5) {
                    let website = $(row[0]).text()
                    let url = $(row[1]).text()
                    let desc = $(row[2]).text()
                    let avatar = $(row[3]).text()
                    let css = $(row[4]).text()
        
                    output += `<bblink link="${url}" icon="${avatar}" des="${desc}" style="${css}" title="${desc}">${website}</bblink>`;
                }
            })

            if(output != '')
                $(this).replaceWith('<bblist>'+output+'</bblist>')
        })

        return $.html()
    }
    return str;
})