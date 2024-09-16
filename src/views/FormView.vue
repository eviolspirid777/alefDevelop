<template>
  <div class="alef-form">
    <div class="alef-form-box">
      <h2>Персональные данные</h2>
      <CustomInput
        v-model="username"
        id="username"
        label="Имя"
      />
      <CustomInput
        v-model="age"
        id="age"
        label="Возраст"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import CustomInput from "@/components/CustomInput.vue"

const username = ref('');
const age = ref('');
</script>
<style lang="scss">
  .alef-form {
    position: relative;
    width: 100%;
    height: 100%;
    &-box {
      position: absolute;
      display: flex;
      flex-flow: column nowrap;
      gap: 20px;
      width: 616px;
      height: 166px;
      top: 106px;
      left: 375px;
      & h2 {
        width: 197px;
        height: 24px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
</style>
