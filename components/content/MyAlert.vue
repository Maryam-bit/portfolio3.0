<template>
    <div class="alert">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>


<style scoped>
.alert {
    border: 1px #ddd solid;
    padding: 10px 5px;
}
</style>