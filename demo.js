const App={
    data(){
        return {
            val:0,
            visible:true,
            text:'text text',
            }
            },
    methods: {
        add(){
            this.val += 1
        },
        sub(){
            this.val -= 1
        },
        },
    create: function(){
        }
    }

Vue.createApp(App).mount('#main')
