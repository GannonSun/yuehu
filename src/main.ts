import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
// app.directive('real-img', async function (el: Element, binding) {
//     let imgUrl = binding.value; // 获取图片地址
//     if (imgUrl) {
//         let exist = await imageIsExist(imgUrl);
//         if (exist) {
//             el.setAttribute('src', img)
//         }
//     }
// })

app.mount('#app')
