import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePersonalDataStore = defineStore('personalData', () => {
  const userInformation = ref<object | {name:string, age:string, children: {name:string, age:string}[]}>({})

  return { userInformation }
})
