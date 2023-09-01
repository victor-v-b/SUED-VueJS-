<template>
    <img class="orkut" alt="Vue resposta" src="../assets/yakult.png">

    <div>
        <a href="orkut.com" class="orkut">¿YAKULTT?</a>
    </div>
</template>

<style>
.orkut {
    color: yellow;
    padding: 0 0;
    height: 97vh;
    width: 100%;
}
</style>

<script>
const som = new Audio(require('@/assets/audio/resposta.mp3'))

som.play()

</script>