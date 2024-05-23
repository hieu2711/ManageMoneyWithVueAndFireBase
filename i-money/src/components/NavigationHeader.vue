<template>
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div v-if="meta.leading" class="w-10 h-10 overflow-hidden rounded-full">
                        <img src="https://www.vlance.vn/uploads/portfolio/view/c4a875224357fa0f1dce59defcb7a42b3d6d2cab1.jpg" class="w-full h-auto object-cover" size="sm" alt="avt" />
                    </div>
                   <h1 class="font-bold text-xl text-dark ml-2">{{ meta.text }}</h1>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <i class="t2ico t2ico-notification"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { computed } from 'vue'
import { useRoute } from "vue-router"
export default {

    setup(){
        const route = useRoute()
        return {
        meta: computed(() => route.meta)
        }
    }
}
</script>