<template>
    <div class="form flex --direction-column col --6">
        <div class="form__block --personal flex --direction-column">
            <h3 class="form__block-title">Персональные данные</h3>
            <div class="form__block-inputs flex --direction-column">
                <div class="big-input form__block-input" :class="{'is-has' : userName.length > 0}">
                    <input v-model="userName" type="text" class="big-input__input" placeholder="Имя">
                    <div class="big-input__title">Имя</div>
                </div>
                <div class="big-input form__block-input" :class="{'is-has' : userAge > 0}">
                    <input v-model="userAge" type="number" min="0" class="big-input__input" placeholder="Возраст">
                    <div class="big-input__title">Возраст</div>
                </div>
            </div>
        </div>
        <div class="form__block --children flex --direction-column">
            <div class="form__block-head flex --just-space --align-center">
                <h3 class="form__block-title">Дети (макс. 5)</h3>
                <button v-show="childrens.length < 5" class="form__block-button flex --align-center --just-center" @click="addChildren()">
                    <div class="form__block-button-plus flex --align-center --just-center"><span></span><span></span></div>
                    Добавить ребенка
                </button>
            </div>
            <div class="form__block-inputs flex --direction-column">
                <div v-for="(children, index) in childrens" class="form__block-inputs-item flex --align-center">
                    <div class="big-input form__block-input" :class="{'is-has' : children.name.length > 0}">
                        <input v-model="children.name" type="text" class="big-input__input" placeholder="Имя">
                        <div class="big-input__title">Имя</div>
                    </div>
                    <div class="big-input form__block-input" :class="{'is-has' : children.age > 0}">
                        <input v-model="children.age" type="number" min="0" class="big-input__input" placeholder="Возраст">
                        <div class="big-input__title">Возраст</div>
                    </div>
                    <div @click="deleteChildren(children)" class="form__block-inputs-delete">Удалить</div>
                </div>
            </div>
        </div>
        <button  @click="saveUser()" class="form__block-save">Сохранить</button>
    </div>
</template>
<script setup>
    import { useUserStore } from '@/stores/user'

    const store = useUserStore()
    const { user } = storeToRefs(store);
    const userName = ref('');
    const userAge = ref('');
    const childrens = ref([]);

    const addChildren = () =>{
        childrens.value.push({name:'', age: ''})
    }

    const deleteChildren = (item) =>{
        childrens.value.splice(childrens.value.indexOf(item), 1)
    }

    const saveUser = () =>{
        user.value = {
            name: userName.value,
            age: userAge.value,
            childrens: childrens.value
        }
    }
</script>