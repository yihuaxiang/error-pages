const express = require('express')
const app = express()
const port = 3009
const path = require('path');

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const links = [
    {
        "title": "📖 敖武的博客",
        "desc": "敖武的生活、技术博客",
        "link": "https://z.wiki"
    },
    {
        "title": "🎠 敖武的游乐园",
        "desc": "诸多游乐项目，快来体验吧！",
        "link": "https://playground.z.wiki"
    },
    {
        "title": "💻 代码片段",
        "desc": "包含js、shell、nginx、java等实用代码片段！",
        "link": "https://snippets.z.wiki"
    },
    {
        "title": "🖼 敖武的图床",
        "desc": "免费图床，上传图片、压缩包等任意文件。",
        "link": "https://playground.z.wiki/img-cloud/index.html"
    },
    {
        "title": "🔗 短网址服务",
        "desc": "缩短你的网址，永久有效。",
        "link": "https://z.wiki/misc/short-url.html"
    },
    {
        "title": "🌆 城市信息查询",
        "desc": "城市 adcode 查询。",
        "link": "https://playground.z.wiki/lbs/showCityInfo"
    },
    {
        "title": "🏫 30分钟正则入门教程",
        "desc": "通俗易懂的正则表达式入门教程。",
        "link": "https://z.wiki/tools/reg/"
    },
    {
        "title": "🐍 贪吃蛇小游戏",
        "desc": "贪吃蛇小游戏，放松一下～",
        "link": "https://playground.z.wiki/snake/index.html"
    }
]


const paths = [
    {
        path: '/404',
        links,
        title: '404，当前页面不存在',
        desc: '您当前访问的页面不存在，请确认您访问的网址或浏览其他页面。',
        refresh: false,
    },
    {
        path: '/500',
        links,
        title: '500，服务系统内部错误',
        desc: '服务系统内部错误，请您稍后再试。',
        refresh: false,
    },
    {
        path: '/50X',
        links,
        title: '50X，当前页面不可用',
        desc: '页面暂时不可用，请您稍后再试。',
        refresh: true,
    }
]

paths.forEach(path => {
    app.get(path.path, (req, res) => {
        res.render('page', {
            ...path,
            links: path.links,
            title: path.title,
            desc: path.desc
        });
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
