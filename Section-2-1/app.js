const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Joshua',
            middleName: '',
            lastName: 'Berrios',
            url: 'https://andisearch.com/',
            raw_url: '<a href="https://andisearch.com/" target="_blank">Andi Search</a>',
            age: 28,
        }
    }, 
    methods: {
        increase() {
            this.age++;
        },
        updateLastName(msg, event) {
            // console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },
    computed: {
        fullName() {
            console.log('Full name computed property was called!');

            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20;
            })
        }
    }
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = 'Mardoqueo';
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Mardoqueo',
//             lastName: 'Berrios'
//         }
//     }
// }).mount('#app2');