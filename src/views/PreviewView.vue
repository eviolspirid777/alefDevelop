<template>
  <main class="alef-preview">
    <div class="alef-preview-box">
      <div class="alef-preview-box-personal-data">
        <span>
          Персональные данные
        </span>
        <span>
          {{ props.name }},{{ props.age }} лет
        </span>
      </div>

      <div class="alef-preview-box-children-data">
        <span>
          Дети
        </span>
        <div
          v-for="(data,key) in props.children"
          :key="key"
          class="alef-preview-data"
        >
          {{ data.name }}, {{ data.age }} лет
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.alef{
  &-preview {
    position: relative;
    height: 100%;
    width: 100%;
    &-box {
      display: flex;
      position: absolute;
      top: 106px;
      left: 375px;
      flex-flow: column nowrap;
      gap: 60px;
      width: 197px;
      height: 280px;
      &-personal-data {
        display: flex;
        flex-flow: column nowrap;
        height: 68px;
        gap: 20px;
      }
      &-children-data {
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;
      }
    }
  }
}
</style>
