<template>
  <div class="alef-header">
    <AlefLogo class="alef-header-logo" v-if="true"></AlefLogo>
    <nav class="alef-header-nav-bar">
      <RouterLink to="/form">Форма</RouterLink>
      <RouterLink to="/">Превью</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AlefLogo from './components/AlefLogo.vue';
</script>

<style scoped lang="scss">
.alef {
  &-header {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 76px;
    border-bottom: 1px solid rgba(17, 17, 17, 0.48);
    &-logo {
      margin-left: 41px;
    }

    &-nav-bar {
      display: flex;
      position: absolute;
      left: calc(50% - 24px);
      flex-flow: row nowrap;
      gap: 0px 15px;

      & a {
        text-decoration: none;
        width: 51px;
        height: 24px;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: rgba(17, 17, 17, 0.48);
      }
    }
  }
}


</style>
