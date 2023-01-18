console.log('JS OK')

// START VUE
const app = Vue.createApp({
    data(){
        return {
         emails: [],
         apiUri : 'https://flynn.boolean.careers/exercises/api/random/mail',
         emailLot : 10,

        }
    },
    methods : {
       getEmailList(){
          for(let i = 0 ; i < this.emailLot ; i++){
            axios.get(this.apiUri).then( response =>{
              this.emails.push(response.data.response);
            })
          }
       }
    },
    mounted(){
        this.getEmailList();
    }
})

app.mount('#root')