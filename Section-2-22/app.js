let vm = Vue.createApp({
    data() {
        return {
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
            people: [
                { name: 'John', age: 20 },
                { name: 'Mary', age: 25 },
                { name: 'Steve', age: 30 },
            ]
        }
    }
}).mount('#app');