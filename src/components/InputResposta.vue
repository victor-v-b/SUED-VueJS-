<template>
    <img class="inputBackground" src="../assets/bloodbar.gif" />

    <!-- v-on:input no lugar de keydown resolveu o problema da ordem de ticks, (keydown ocorre antes da re-renderizaçao) -->
    <input class="input" @keydown.;.prevent="semicolon" @input="reEscreve" v-model="perguntaEscrita" />

    <div id="menu">
        <div>
            <button @click="payload" :disabled="perguntaEscrita === ''">Resposta</button>
        </div>
        <div>
            Informações
        </div>
        <div>
            <router-link to="/"> sair </router-link>
        </div>
    </div>


</template>

<script>

let oculto = false;

let contador = 0;

let listaPerguntasDefault = [
    'Olá, será que o senhor poderia fafdgagf___topkek___'
    , 'Grande Sued, me diga, por favor dgjioas___topkapi___ '
    , 'Saudações, digníssimo ser do além 123456___topkapi___7890'
    , 'Ó, soberano Sued, me ajude a descobrir dsfuijddg'
]
//seleciona uma aleatoria
let perguntaDefault = listaPerguntasDefault[Math.floor(Math.random() * listaPerguntasDefault.length)]

const typeSound = new Audio(require('@/assets/audio/typesound.mp3'))

export default {
    emits: ['enviaMsg', 'enviaStatus']
    , data() {
        return {
            msgSecreta: ''
            , perguntaEscrita: ''
        }
    }
    , methods: {
        // toggle estado oculto
        semicolon() {
            oculto = !oculto;
            console.log('oculto: ' + oculto);

        }
        // argumento = obj do evento (inputEvent)
        , reEscreve(char) {
            typeSound.load()
            typeSound.play()

            if (oculto) {
                if (char.inputType == 'deleteContentBackward') {
                    //deleta
                    // this.perguntaEscrita = this.perguntaEscrita.replace(/.$/, '')
                    this.msgSecreta = this.msgSecreta.replace(/.$/, '')
                    contador--
                }

                else {
                    let perguntaDefaultChar = perguntaDefault[contador]
                    this.perguntaEscrita = this.perguntaEscrita.replace(/.$/, perguntaDefaultChar)
                    contador++
                    // concatena a tecla (obj.data)
                    this.msgSecreta += char.data
                }
            }
        }
        , payload() {
            console.log(contador)
            if (contador > 0) {
                this.$emit('enviaMsg', this.msgSecreta[0].toUpperCase() + this.msgSecreta.substring(1));
            }
            else {
                this.$emit('enviaMsg', 'Você não é digno')
            }

            this.$emit('enviaStatus')

            // reset
            this.perguntaEscrita = ''
            this.msgSecreta = ''
            contador = 0
            perguntaDefault = listaPerguntasDefault[Math.floor(Math.random() * listaPerguntasDefault.length)]
        }
    }
}
</script>

<style scoped>
.input {
    width: 99%;
    background: transparent;
    caret-color: yellow;
    transform: translate(0, -125px);
    border: none;
    padding: 1px 10px;
    font-size: 20px;
    color: #dbfc21;
}

.input:focus {
    outline-width: 0;
}

.inputBackground {
    width: 100%;
    height: 20vh;
}


div{
    padding:10px;
}
</style>
