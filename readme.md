# BubbleMemory

BubbleMemory主题修改自：[Bubble](https://github.com/trinitrotofu/Bubble)（Typecho 清新风格响应式主题）

化繁为简，如沐清风。

Demo:  [https://tntofu.com](https://tntofu.com/) (Bubble主题)

Demo：https://innc11.cn （BubbleMemory主题）

# 使用

## 安装

1. 下载`Zip`包，解压至`themes`目录下，并将文件夹命名为`BubbleMemory`
2. 在`_config.yml`设置`theme: BubbleMemory`并保存

## 设置

打开`themes/BubbleMemory/_config.yml`

```yaml
# 是否自动显示出所有独立页面
display_pages: false

# 手动显示独立页面（可以指定顺序）
pages:
  - ['归档', '/archives']
  - ['友人', '/links.html']
  - ['关于', '/about-me.html']

# 是否在HTTP Headers中显示Typecho的头
# 这个我也不知道有啥用，好像true和false都没有什么影响
typecho_headers: true

# 在博客首页的文章列表顶部也显示一个分页器（从第二页开始显示）
double_paginator_for_index: true

# 是否启用 katex 数学公式渲染
katex: true

# 是否启用 prism.js 代码高亮
prismjs: true

# 是否显示 prism.js 代码高亮左侧行号
prism_line_numbers: true

# 选择 prism.js 代码高亮的主题配色
# 可用值：
#   - prism
#   - prism-coy
#   - prism-funky
#   - prism-solarizedlight
#   - prism-tomorrow
#   - prism-twilight
prism_theme: 'prism-solarizedlight'

# 是否启用全站 Pjax 模式提升用户访问体验。注意：启用该项可能带来页面加载问题
pjax: true

# 是否开启 TOC 文章目录功能
toc: true

# 打开文章时目录默认是否是打开的状态
toc_open: false

# 是否在首页以及文章页顶部背景处显示半透明气泡
bubble_show: true

# 页脚文字，可以用于放置版权声明或者备案信息，可添加 HTML 标签
footer_text: '© 2017 - 2021 | Theme BubbleMemory modified from Bubble'

# 在这里填入 Pjax 渲染完毕后需执行的 JS 代码（一般情况请保持为空）
pjax_callback: ''

# 头像地址，如果不是以http开头，会被视为本地资源，留空使用默认值：images/avatar.png
avatar_url: ''

# 网站图标地址，如果不是以http开头，会被视为本地资源，留空使用默认值：images/gamemechine.png
logo_url: ''

# 首页背景，留空则会使用下方随机背景
index_backround: ''

# 随机背景图片，会随机选取作为文章背景图（如果为文章专门指定背景图）
# 格式为URL列表
# 为空列表时会使用默认的渐变背景
random_backrounds: []
```

### 头像地址和网站图标地址

可以填写的格式：

1. URL（例：https://baidu.com/logo.png）
2. 相对路径（例：images/avatar.png）
3. 留空

## 从表格渲染友链



## 短代码

### 高亮代码框

标签名：

- `bbcode`：高亮代码框标签

语法：

```
<bbcode type="颜色类型">代码框内容</bbcode>
```

示例：

```html
<bbcode type="success">这是绿色高亮代码框，用以显示推荐信息</bbcode>
<bbcode type="danger">这是红色高亮代码框，用以显示警告信息</bbcode>
<bbcode type="warning">这是橙色高亮代码框，用以显示注意信息</bbcode>
<bbcode type="secondary">这是灰色高亮代码框，用以显示引用信息</bbcode>
<bbcode type="info">这是蓝绿色高亮代码框，用以显示高亮信息</bbcode>
<bbcode type="default">这是深蓝色高亮代码框，用以显示高亮信息</bbcode>
<bbcode type="primary">这是紫色高亮代码框，用以显示高亮信息</bbcode>
```

效果：

![bbcode.png](https://i.loli.net/2020/04/07/VEk37bUuXc1lyf6.png)

### 友链

标签名：

- `bblist`：友链列表标签
- `bblink`：友链项标签

语法：

```
<bblist>
	<bblink link="友链 URL" icon="友链图标 URL" des="友链描述">友链名称</bblink>
</bblist>
```

示例：

```
<bblist>
    <bblink link="https://tntofu.com" icon="https://tntofu.com/usr/uploads/2020/03/4228973783.jpg" des="三硝基豆腐的博客">豆腐蒸锅</bblink>
    <bblink link="https://blog.boxpaper.club" icon="https://tntofu.com/usr/uploads/2020/04/2709766458.png" des="/ No Result !">Rorical</bblink>
</bblist>
```

效果：

![bblink.png](https://i.loli.net/2020/04/07/13ZtBldaNuxqrch.png)

# 截图

![QQ截图20210318191844.jpg](https://i.loli.net/2021/03/18/I6j2pFTgnditECQ.jpg)

# 已知问题

1. PJAX覆盖不完全，目前PJAX仅覆盖了文章内容页面，对其它页面暂时无效（已经在修了）
2. 暂时没有评论系统，因为之前是用的自己的评论系统，而且安装也比较麻烦，就没有一起集成到主题里

# License

Open sourced under the MIT license.