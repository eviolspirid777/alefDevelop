<template>
  <div class="alef">
    <header class="alef-header">
      <AlefLogo class="alef-header-logo"></AlefLogo>
      <nav class="alef-header-nav-bar">
        <RouterLink to="/form">Форма</RouterLink>
        <RouterLink to="/">Превью</RouterLink>
      </nav>
    </header>
  
    <RouterView />
    <footer class="alef-footer">
      <span>
        all rights reserved
      </span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';

import AlefLogo from './components/AlefLogo.vue';

import { usePersonalDataStore } from "@/stores/personalDataStore";

const personalStore = usePersonalDataStore();

onMounted(() => {
  const storedUserInfo = localStorage.getItem('userInformation');
  if (storedUserInfo) {
    personalStore.userInformation = JSON.parse(storedUserInfo);
  }
});
</script>

<style scoped lang="scss">
.alef {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  &-header {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 76px;
    min-height: 76px;
    border-bottom: 1px solid rgba(17, 17, 17, 0.48);
    &-logo {
      margin-left: 41px;
    }

    &-nav-bar {
      display: flex;
      position: absolute;
      left: calc(50% - 80px);
      flex-flow: row nowrap;
      gap: 0px 20px;

      & a {
        text-decoration: none;
        outline: none;
        width: 51px;
        height: 24px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: rgba(17, 17, 17, 0.48);
      }
    }
  }

  &-footer {
    position: absolute;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 0;
    height: 76px;
    width: 100%;
    background: #fafafa;
    & span {
      width: 116px;
      height: 16px;
      font-size: 13px;
      font-weight: 400;
      line-height: 15.85px;
      color: rgba(0,0,0,1)
    }
  }
}


</style>
