let vm = Vue.createApp({
    
    // template: ``
})

vm.component('jb-hello', {
    template: `<h1>{{ message }}</h1>`,
    data() {
        return {
            message: "Hey What is Up!"
        }
    }
})

vm.mount('#app')


// let vm2 = Vue.createApp({
//     data() {
//         return {
//             message: "Hello Mundo!"
//         }
//     },
//     render() {
//         return Vue.h(
//             'h1',
//             this.message
//         )
//     }
// }).mount("#app2")