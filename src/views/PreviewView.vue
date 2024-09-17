<template>
  <main class="alef-preview">
    <div v-if="checkData" class="alef-preview-box">
      <div class="alef-preview-box-personal-data">
        <span class="alef-preview-box-personal-data-header">
          Персональные данные
        </span>
        <span class="alef-preview-box-personal-data-content">
          {{ user.username }},{{ user.age }} лет
        </span>
      </div>

      <div class="alef-preview-box-children-data">
        <span class="alef-preview-box-children-data-header">
          Дети
        </span>
        <div
          v-for="(data,key) in user.children"
          :key="key"
          class="alef-preview-box-children-data-content"
        >
          {{ data.name }}, {{ data.age }} лет
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { usePersonalDataStore } from "@/stores/personalDataStore";
import {ref, computed} from "vue"
import { type Parent } from "@/types/ParentType";

const store = usePersonalDataStore();

const user = ref<Parent| {}>(store.userInformation)

const checkData = computed(() => {
  return localStorage.getItem("userInformation") !== null || Object.keys(store.userInformation).length > 1 ? 
    true :
    false;
})
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
        &-header {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          text-align: left;
        }
        &-content {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          text-align: left;
        }
      }
      &-children-data {
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;
        &-header {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          text-align: left;
        }
        &-content {
          display: flex;
          flex-flow: column nowrap;
          width: 143px;
          height: 44px;
          padding: 10px 20px 10px 20px;
          gap: 10px;
          border-radius: 5px;
          background-color: #F1F1F1;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          text-align: left;
        }
      }
    }
  }
}
</style>
