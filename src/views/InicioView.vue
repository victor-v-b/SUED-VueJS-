<template>
    <div>
        <router-link id="jogar" to="/sued" @click="toca()"> Jogar </router-link>
    </div>

    <div style="padding:130px">
        <img src="../assets/Devil.gif">
    </div>

    <div>
        Este programa deve ser usado por sua conta e risco.
O autor não se responsabiliza pelas reações que venham
a ocorrer com as pessoas, diante das respostas dadas.

Aconselho acender uma vela e apagar as luzes antes de executar o programa.

Para que SUED responda as suas perguntas,
você deve elogiá-lo e, em seguida, fazer a pergunta
de maneira clara e objetiva.

    </div>

</template>

<script>
let music = require('@/assets/audio/maintrack.mp3')
const musica = new Audio(music)
musica.loop = true

export default {
    methods: {
        toca() {
            musica.play()
        }
    }
}
</script>

<style>
#jogar{
    font-size: 35px;
}

html {
    cursor: url("https://web.archive.org/web/20041108162205/http://www.geocities.com:80/paisleybabee/eyeinhand.gif"), auto;
}
</style>