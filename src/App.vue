<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.resize-enter-active,
.resize-leave-active {
  transition: scale 3.5s ease;
}

.resize-enter-from,
.resize-leave-to {
  scale: 0;
}

</style>
