<template>
    <navigation-header />
    <slot />
    <navigation-bottom v-if="meta.isShowFooter"/>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import NavigationHeader from '@/components/NavigationHeader.vue';
import  NavigationBottom from '@/components/NavigationBottom.vue';
export default {
    components:{
        NavigationBottom,
        NavigationHeader
    },
    setup(){
        const route = useRoute()
        return {
            meta: computed(() => route.meta)
        }
    }
}
</script>