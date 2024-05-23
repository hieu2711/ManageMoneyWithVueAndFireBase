<template>
    <div class="row">
        <div class="container mx-auto p-8" v-if="user">
            <div class="text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img src="https://www.vlance.vn/uploads/portfolio/view/c4a875224357fa0f1dce59defcb7a42b3d6d2cab1.jpg" size="xs" alt="avt" class="w-full h-auto object-cover"/>
                </div>
                <div class="font-bold text-2xl text-primary mt-3">{{ user.displayName }}</div>
                <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
            </div>
        </div>
    </div>

    <div>
         <div class="container mx-auto px-8">
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-bold text-xl text-primary mb-2">General</h3>
                </div>
            </div>
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <ul>
                        <li v-for="profileAction in profileActions" :key="profileAction.name">
                            <router-link :to="profileAction.route" class="flex justify-between items-center py-3">
                            <div class="flex items-center text-left">
                                <i class="t2ico text-2xl " :class="profileAction.icon"></i>
                                <h5 class="font-semibold ml-3">{{profileAction.name}}</h5>
                            </div>
                            <div class="text-right">
                                  <i class="t2ico t2ico-arrow-right text-2xl"></i>
                            </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
import  { reactive } from "vue"
import { PROFILE_ACTIONS } from "@/constant"
import { useUser } from "@/composables/useUser"
export default {
    setup(){
        const { getUser } = useUser();
        const { user } = getUser();
        const profileActions = reactive(PROFILE_ACTIONS);
        return { profileActions, user }
    }
}
</script>