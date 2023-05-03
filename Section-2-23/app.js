let vm = Vue.createApp({
    data() {
        return {
            people: [
                { name: 'John', age: 30, message: 'Hey Gang!' },
                { name: 'Jane', age: 25, message: 'I like strawberries' },
                { name: 'Max', age: 40, message: 'Flying planes is so much fun' }
            ]
        }
    },
    methods: {
        move() {
            const first = this.people.shift();

            this.people.push(first);
        }
    }
}).mount('#app');