<template>
    <transition name="fade">
        <div v-if="visible" class="notification" :class="type" @click="removeNotification">
        <span>{{ message }}</span>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
message: String,
type: {
    type: String,
    default: 'success'
},
duration: {
    type: Number,
    default: 3000
}
});

const visible = ref(true);

watch(() => props.message, (newMessage) => {
if (newMessage) {
    visible.value = true;
}
});

setTimeout(() => {
visible.value = false;
}, props.duration);

const removeNotification = () => {
visible.value = false;
};
</script>

<style scoped>
.notification {
    z-index: 1;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 16px;
    background-color: #ffffff;
    color: black;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
.success {
    border: 1px solid #01a7fd;
}
.error {
    border: 1px solid #dc3545;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
