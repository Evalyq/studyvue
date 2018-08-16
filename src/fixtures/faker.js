import HomePageData from "./home.json"
// 可以使用 require.context() 方法来创建自己的（模块）上下文，这个方法有 3 个参数：要搜索的文件夹目录，是否还应该搜索它的子目录，以及一个匹配文件的正则表达式。
var slider_images = require.context('./sliders', false, /\.(png|jpg|gif|svg)$/)
var cover_images = require.context('./covers', false, /\.(png|jpg|gif|svg)$/)
HomePageData.top.forEach((x)=> {
    x.img_url = slider_images('./' + x.img_url)
})
HomePageData.promotions.forEach((x)=> {
    x.img_url = cover_images('./' + x.img_url)
})
export default {
    getHomeData() {
        return HomePageData
    }
}