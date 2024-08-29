<template>
    <div class="center-wrap">
        <nav class="nav ">
            <div class="nav__wrap grid --temp-col-2 col --12">
                <div class="logo thumb">
                    <NuxtIcon name="logo" filled />
                </div>
                <div class="switch flex">
                    <div @click="form = true, preview = false" class="switch__item">Форма</div>
                    <div @click="form = false, preview = true" class="switch__item">Превью</div>
                </div>
            </div>
        </nav>
        <Form v-show="form"></Form>
        <Preview v-show="preview"/>
    </div>
</template>
<script setup>
    const form = ref(true);
    const preview = ref(false);

</script>