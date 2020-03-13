Vue.component(
<<<<<<< HEAD
    'button-counter',{
    template:'#counter-template',
    data(){
        return{
            count: 0
        }
        
    },
    methods: {
        increment(){
            this.count++;
        }
    }
}
    )



=======
    'button-counter',
    {
        template:'#counter-template',
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment(){
                this.count++;
            }
        }
    }
)
>>>>>>> 088b8ea4a889106f6508b023eac1f5fa0df10a63

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      title: 'SE Projects',
<<<<<<< HEAD
      projects:[
          'Psu Quiz',
          'Mooi',
          'Minework'
      ],
      show: true,
      url:'http://www.google.com',
      todos:[],
      newtask:''
      
    },
    methods:{
        toggleTitle(){
            this.show= !this.show
        },
        addTask(){
            this.todos.push(this.newtask)
            this.newtask = ''
        },
        clearTask(){
            this.todos =[]
            
        }
        
    }
  })
=======
      projects: [
         'PSU Quiz',
         'Mooi',
         'MineWork'
      ],
      show: false,
      url: 'http://www.google.com',
      todos: [],
      newtask: '',
      
    },
    methods: {
        toggleTitle() {
            this.show = !this.show
        },
        addTask() {
            this.todos.push(this.newtask)
            this.newtask = ''
        },
        clearTask() {
            this.todos = []
        },
        
    }
})
>>>>>>> 088b8ea4a889106f6508b023eac1f5fa0df10a63
