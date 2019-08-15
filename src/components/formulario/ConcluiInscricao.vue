<template>
    <b-container>
        <center>
            <h3 class="mt-5">Seus dados para inscrição foram enviados, verifique seu e-mail para saber qual sua situação referente a matrícula.</h3>
        </center>
    </b-container>
</template>

<script>
export default {
    name: 'ConcluiInscricao',
    data(){
        return{
            idUser: window.localStorage.getItem('id')
        }
    },
    mounted(){
        if(this.idUser == null){
          window.location.href = '/'
        }
    }
}


</script>

