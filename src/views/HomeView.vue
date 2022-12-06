<template>

  <div class="img">
    <img id="ojos" alt="DEABO" src="../assets/ojos.jpg">
  </div>

  <InputResposta @enviaStatus="aparece" @enviaMsg="enviaMsg2" />

  <transition name="resize">
    <div v-if="status">
      <RespostaJanela @enviaStatus="aparece" :msg="mensagem" />
    </div>
  </transition>

</template>

<script>
// @ is an alias to /src
import RespostaJanela from '@/components/RespostaJanela.vue'
import InputResposta from '@/components/InputResposta.vue'

const somResposta = new Audio(require('@/assets/audio/resposta.mp3'))

export default {
  name: 'HomeView'
  , components: {
    RespostaJanela,
    InputResposta
  }
  , data() {
    return {
      status: false
      , mensagem: ''
    }
  }

  , methods: {
     aparece() {
      this.status = !this.status
      if (this.status) {
        somResposta.play()
      }
      else {
        somResposta.pause()
        somResposta.currentTime = 0;
      }
    }
    , enviaMsg2(msg) {
      this.mensagem = msg;
    }
  }
}
</script>

<style>
body {
  background-color: black;
}

#ojos {
  width: 100%;
  height: 100%
}

.img {
  width: 100%;
  height: 28vh
}
</style>