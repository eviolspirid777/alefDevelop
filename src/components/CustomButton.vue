<template>
    <button>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    width:  204px;
    height:  44px;
    padding: 10px 20px 10px 20px;
    border-radius: 100px;
    border: 2px solid #01A7FD;
    background-color: #fff;
    color: #01A7FD;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    &:hover {
        background-color: #01A7FD;
        color: white;
    }
}
</style>