<template>
  <div class="alef-form">
    <div class="alef-form-box">
      <div class="alef-form-box-personal-data">
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
      <div class="alef-form-box-children-data">
        <div class="alef-form-box-children-data-header">
          <h2>Дети (макс.5)</h2>
          <CustomButton v-if="isDisabled" @click="addChild">Добавить ребенка</CustomButton>
        </div>
        <div
          v-for="(child,key) in children"
          :key="key"
          class="alef-form-box-children-data-body"
        >
          <CustomInput
            v-model="child.name"
            :id="child.name"
            label="Имя"
          />
          <CustomInput
            v-model="child.age"
            :id="child.age"
            label="Возраст"
          />
          <span @click="sliceUser(key)">Удалить</span>
        </div>
        <button
          class="alef-form-box-children-data-submit"
          @click="saveForm"
          id="openModal"
        >Сохранить</button>
      </div>
    </div>
  </div>
  <Notification v-if="notificationMessage" :message="notificationMessage" type="success" />
</template>
<script lang="ts" setup>
import {ref, computed, onMounted} from "vue"
import CustomInput from "@/components/CustomInput.vue"
import CustomButton from "@/components/CustomButton.vue";
import { usePersonalDataStore } from "@/stores/personalDataStore";
import Notification from "@/components/NotificationComponent.vue"

const personalStore = usePersonalDataStore();


const username = ref("");
const age = ref("");
const children = ref<{name:String, age: any}[]|Object[]>([]);

const notificationMessage = ref("");

onMounted(() => {
  if(localStorage.getItem('userInformation')) {
    const storedUserInfo = localStorage.getItem('userInformation');
    personalStore.userInformation = JSON.parse(storedUserInfo);
  }
  if(Object.keys(personalStore.userInformation).length > 1) {
    const data = personalStore.userInformation;
    username.value = data.username;
    age.value = data.age;
    children.value = data.children;
  }
});

const isDisabled = computed(() => {
  if(children.value.length > 4) {
    return false;
  }
  return true
})

const sliceUser = (key: number) => {
  children.value.splice(key,1)
}

const addChild = () => {
  if(children.value === undefined) {
    children.value = []
  }
  children.value.push({ name: "", age: ""})
}

const saveForm = () => {
  personalStore.userInformation = { username: username.value, age: age.value, children: children.value };
  localStorage.setItem('userInformation', JSON.stringify(personalStore.userInformation));
  
  notificationMessage.value = "Данные успешно сохранены!";
  setTimeout(() => {
    notificationMessage.value = "";
  }, 3000);
}
</script>
<style lang="scss">
.alef-form {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  &-box {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    width: 616px;
    height: 166px;
    top: 106px;
    left: 375px;
    &-personal-data {
      display: flex;
      flex-flow: column nowrap;
      gap: 20px;
      & h2 {
        width: 197px;
        height: 24px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
    &-children-data {
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      gap: 20px;
      margin-top: 44px;
      width: 638px;
      &-header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        & h2 {
          line-height: 44px;
          font-weight: 500;
          text-align: left;
        }
        & button {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      &-body {
        display: flex;
        flex-flow: row nowrap;
        gap: 10px 30px;
        & .form-group {
          flex-grow: 0.5;
        }
        & span {
          color: #01A7FD;
          line-height: 46px;
          cursor: pointer;
        }
      }
      &-submit {
        width: 118px;
        height: 44px;
        padding: 10px 20px 10px 20px;
        border-radius: 100px;
        background-color: #01A7FD;
        color: white;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        border: none;
      }
    }
  }
}

.modal-window-content {
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
</style>
