<template>

    <container class="resposta">

        <img src="../assets/resposta.jpg">

        <div class="respostaDivina">
            {{ msg }}

            <button @click="enviaStatus">voltar</button>
        </div>
    </container>

</template>

<script>
export default {
    name: 'RespostaJanela',

    props: {
        msg: String
    },
    emits: ['enviaStatus']
    ,
    methods: {
        enviaStatus() {
            this.$emit('enviaStatus')
        }
    }
}
</script>

<style scoped>
.respostaDivina {

    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, 70%);

    color: yellow;
    text-shadow: -1px -1px 2px red;
    font-size: 200%;
}

.resposta {
    position: absolute;
    transform: translate(-50%, -80%);

    text-align: center;
    height: 80vh;
    width: 50%;
}

button {
    padding: 5px
}
</style>