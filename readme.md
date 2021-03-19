# BubbleMemory

BubbleMemory主题修改自：[Bubble](https://github.com/trinitrotofu/Bubble)（Typecho 清新风格响应式主题）

化繁为简，如沐清风。

Demo:  [https://tntofu.com](https://tntofu.com/) (Bubble主题)

Demo：https://innc11.cn （BubbleMemory主题）

# 截图

![QQ截图20210318191844.jpg](https://i.loli.net/2021/03/18/I6j2pFTgnditECQ.jpg)

# 使用

## 安装

### 使用命令行安装

```
npm install -g hexo-cli
hexo init <site>
cd <site>
git clone https://github.com/innc11/BubbleMemory themes/BubbleMemory
```

### 手动安装

1. 下载主分支的Zip包
2. 在`themes`目录创建一个目录`BubbleMemory`
3. 将Zip包里的所有文件解压至`BubbleMemory`目录下

## 设置

配置文件位置`themes/BubbleMemory/_config.yml`

```yaml
# 是否自动显示出所有独立页面
# 建议和下面的pages二选一就好
display_pages: false

# 在顶部显示下方列出的按钮（会按列表顺序进行显示）
pages:
  - ['归档', '/archives']
  - ['友人', '/links.html']
  - ['关于', '/about-me.html']
  
# 对对应的文章布局使用相对资源路径支持（请看下方说明）
relative_asset_link_layouts: 
  post: true
  page: true
  backgrounds: true

# 是否在HTTP Headers中附加上Typecho的头
# 这个我也不知道有啥用，好像true和false都没有什么影响
typecho_headers: true

# 是否在博客首页的文章列表顶部也显示一个分页器（会从第二页开始显示）
double_paginator_for_index: false

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
footer_text: '© 2017 - 2021 | <a href="https://beian.miit.gov.cn">萌ICP备12345678号</a><br>'

# 在这里填入 Pjax 渲染完毕后需执行的 JS 代码（一般情况请保持为空）
pjax_callback: ''

# 头像地址，如果不是以http开头，会被视为本地资源，留空使用默认值：images/avatar.png
avatar_url: ''

# 网站图标地址，如果不是以http开头，会被视为本地资源，留空使用默认值：images/gamemechine.png
logo_url: ''

# 页面底部的站点运行时间
site_running_time:

  # 是否显示站点运行时间
  enabled: true
  
  # 是否自动刷新
  refresh: true
  
  # 站点的生日（格式必须按照下面来写）
  since: "2017-09-15 15:20:22"
  
  # 要显示的文字（占位符请参考下方）
  format: 🚀已航行%D个地球日

# 首页背景，留空则会使用下方随机背景
index_backround: ''

# 随机背景图片，会随机选取作为文章背景图（如果为文章专门指定背景图）

# 为空列表时会使用默认的渐变背景
# random_backrounds: []

# 格式为URL列表
random_backrounds: 
  - https://cdn.jsdelivr.net/gh/innc11/BlogBackrounds@latest/020fe9b4220c50b6302d13fd070cd32e.jpg
  - https://cdn.jsdelivr.net/gh/innc11/BlogBackrounds@latest/04f1b46a2a9757bdad1867e6c51ae445.jpg
  - https://cdn.jsdelivr.net/gh/innc11/BlogBackrounds@latest/0e493e01afc5693e18bdd259c3025148.jpg
```

### 头像地址和网站图标地址

可以填写的格式：

1. URL（例：https://baidu.com/logo.png）
2. 相对路径（例：images/avatar.png）
3. 留空

### 站点运行时间

format格式：

| 占位符 | 范围   | 说明                 |
| ------ | ------ | -------------------- |
| %y     | 0-无限 | 运行至今所度过的年数 |
| %m     | 0-11   | 月数                 |
| %d     | 0-30   | 天数                 |
| %h     | 0-59   | 小时                 |
| %i     | 0-59   | 分钟                 |
| %s     | 0-59   | 秒数                 |
| %Y     | 同%y   | 同%y                 |
| %M     | 0-无限 | 累计所度过的月数     |
| %D     | 0-无限 | 累计所度过的天数     |
| %H     | 0-无限 | 累计所度过的小时     |
| %I     | 0-无限 | 累计所度过的分钟数   |
| %S     | 0-无限 | 累计所度过的秒数     |


## Front-Matters支持

### 从Markdown表格渲染友情链接

在Front-Matter加上`friends: true`后，可以把文章内容里的表格渲染成友情链接（bblist和bblink标签），使用表格进行管理友链，比直接修改bbcode要方便的多

![QQ截图20210318202927.png](https://i.loli.net/2021/03/18/ncJmKvfO1iNHAqF.png)

只有符合格式要求的表格才会被渲染成友链（列数必须为5列，列名可以为任意，因为程序不会读取）

第一列为站点名称，第二列为站点链接，第三列为站点副标题（描述），第四列为头像URL，第五列为CSS代码

CSS代码可以用来对单个友链进行设置（不包含选择器代码），比如隐藏或者高亮某个友链，比如`display: none`

比如下面的表格，在最终渲染时会以bblist和bblink进行显示

| 网站       | 链接                     | 描述                                              | 头像                                                         | CSS  |
| ---------- | ------------------------ | ------------------------------------------------- | ------------------------------------------------------------ | ---- |
| 夜街尘     | https://innc11.cn        | 眨眼间，已是千年之外                              | https://innc11.cn/usr/avatar/avatar.png                      |      |
| 豆腐蒸锅   | https://tntofu.com       | 三硝基豆腐的博客                                  | https://tntofu.com/usr/uploads/2020/07/733618307.png         |      |
| 凌中的锋雨 | https://www.xiaolfeng.cn | 我不为有多厉害，只为在茫茫人海中有自己的一片天空~ | https://cdn.jsdelivr.net/gh/XiaoLFeng/Blog_Things@0.2.4/ico/logo.jpg |      |

最终效果

![QQ截图20210318200542.jpg](https://i.loli.net/2021/03/18/WvA6IXhMjys4g5K.jpg)

### 自定义头图/背景

在Front-Matter加上`bg: url`后，文章/独立页面的背景将会固定地使用你指定的url，而不是在`config.yml`里随机选取

![QQ截图20210318203106.png](https://i.loli.net/2021/03/18/oq6XGxK3lWDQYOH.png)

![QQ截图20210318203236.jpg](https://i.loli.net/2021/03/18/nSwjvUJ2Vu6fDho.jpg)

![头图预览.jpg](https://i.loli.net/2021/03/19/EJu9AtNSGgTPder.jpg)

自定义头图/背景同样会在首页显示（只是颜色很淡而已）

---

#### 支持引用文章资源目录的文件

如果`url`部分不是以http开头的URL，而是一个文件名，则会使用文章对应的资源目录里的文件作为头图/背景

此功能仅在对应`layout`的**相对资源路径**选项启用时有效

![bg引用文章资源文件.jpg](https://i.loli.net/2021/03/19/hKg7x2mYNXkb8UI.jpg)

## 独立页面

除了Hexo自带的归档页(/archives)以外，BubbleMemory还支持额外的文章模板（layout）

### 背景图页面

在Front-Matter加上`layout: backgrounds`后，会将主题`_config.yml`里的`random_backrounds`中的所有背景图片放在文章末尾进行展示（白嫖党的福利）

截图

![as4f4asf.jpg](https://i.loli.net/2021/03/18/nX78xbPzRCeZETV.jpg)

![QQ截图20210318194956.jpg](https://i.loli.net/2021/03/18/LtrKQocZjY7hJSa.jpg)

## 相对资源路径

BubbleMemory支持在Markdown里直接使用相对路径访问资源文件，而不需要使用像这样的**标签**

```ejs
{% asset_img slug [title] %}
```

只需要简单地使用`![some_picture.png](article/some_picture.png)`就好了，剩余的工作BubbleMemory会帮你完成

![QQ截图20210319000633.jpg](https://i.loli.net/2021/03/19/aG4l2Jg5xmhypCc.jpg)

借此方法可以在Typora等编辑器进行编写文章，并且支持拖入图片，完全不用考虑资源引用的问题

---

启用此功能需要将hexo`_config.yml`中的`post_asset_folder`设为`true`

然后打开主题`_config.yml`

在`relative_asset_link_layouts`中将对应的`layout`设为`true`即可

```yaml
relative_asset_link_layouts: 
  post: true
  page: true
  backgrounds: true
```

默认已为`post`、`page`、`backgrounds`开启了相对资源路径的效果

可以通过设为`false`来关闭某一`layout`，也可以新增其它`layout`的规则

当修改`relative_asset_link_layouts`后需要执行`yarn hexo clean`清理缓存

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

（建议使用上方的MD表格管理友链，当然使用bbcode也是没问题的）

标签名：

- `bblist`：友链列表标签
- `bblink`：友链项标签

语法：

```html
<bblist>
	<bblink link="友链 URL" icon="友链图标 URL" des="友链描述">友链名称</bblink>
</bblist>
```

示例：

```html
<bblist>
    <bblink link="https://tntofu.com" icon="https://tntofu.com/usr/uploads/2020/03/4228973783.jpg" des="三硝基豆腐的博客">豆腐蒸锅</bblink>
    <bblink link="https://blog.boxpaper.club" icon="https://tntofu.com/usr/uploads/2020/04/2709766458.png" des="/ No Result !">Rorical</bblink>
</bblist>
```

效果：

![bblink.png](https://i.loli.net/2020/04/07/13ZtBldaNuxqrch.png)

# 已知问题

1. PJAX覆盖不完全，目前PJAX仅覆盖了文章内容页面，对其它页面暂时无效（已经在修了）
2. 暂时没有评论系统，因为之前是用的自己的评论系统，而且安装也比较麻烦，就没有一起集成到主题里

# License

Open sourced under the MIT license.
