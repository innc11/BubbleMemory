// 永久连接使用方式： 在config.yml里面设置permalink: :plink.html 

hexo.extend.filter.register('before_post_render', function(date)
{
    if (date.layout == 'post') 
    {
        date.plink = date.date.format('YYDDDD-HHmm')
    }

    return date
})