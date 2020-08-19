<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.footerShow"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '@/components/footerGuide'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>
