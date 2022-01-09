const app = Vue.createApp({
    
    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola Mundo')
            this.author = "Niver Mtz"
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount("#myApp")