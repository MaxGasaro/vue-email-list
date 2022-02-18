const app = new Vue(
    {
        el:'#app',
        data: {
            eMails: [],
        },
        mounted() {

            for(let i = 0; i <= 9; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.eMails.push(response.data.response);
                })

            }
            
        }
    }
)