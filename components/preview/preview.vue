<template>
    <div class="preview flex --direction-column col --6">
        <div class="preview__block flex --direction-column">
            <h3 class="form__block-title">Персональные данные</h3>
            <div class="preview__block-info">
                <span v-show="user.name">{{ user.name }},</span> <span v-show="user.age">{{ user.age }} лет</span>
            </div>
        </div>
        <div class="preview__block flex --direction-column">
            <h3 class="form__block-title">Дети</h3>
            <div class="preview__block-info flex --direction-column">
                <div v-for="(children, index) in user.childrens" class="preview__block-info-children">
                    <span v-show="children.name">{{ children.name }},</span> <span v-show="children.age">{{ children.age }} лет</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useUserStore } from '@/stores/user'

    const store = useUserStore()
    const { user } = storeToRefs(store);
</script>