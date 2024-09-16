<template>
    <div class="form-group">
        <input
            type="text" 
            :id="id" 
            v-model="inputValue" 
            required 
            @input="updateValue" 
            placeholder=" "
        />
        <label :for="id">{{label}}</label>
    </div>
</template>
<script lang="ts" setup>
import { watch, ref, defineProps, defineEmits } from "vue";

const props = defineProps({
    modelValue: String,
    id: String,
    label: String
})

const emit = defineEmits(["update:modelValue"])

const inputValue = ref(props.modelValue);

watch(() => props.modelValue, (newVal) => {
    inputValue.value = newVal;
});


const updateValue = () => {
    emit('update:modelValue', inputValue.value);
};
</script>
<style lang="scss" scoped>
.form-group {
    position: relative;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    padding-top: 15px;
}


label {
    position: absolute;
    left: 10px;
    top: 15px;
    color: #aaa;
    transition: all 0.2s ease;
    pointer-events: none;
}

input:focus + label,
input:not(:placeholder-shown) + label {
    top: 5px;
    left: 10px;
    color: #aaa;
    font-size: 10px;
    font-weight: bold;
}
</style>