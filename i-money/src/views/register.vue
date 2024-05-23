<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form @submit.prevent="onSubmit" class="flex flex-col space-y-6 justify-start">
                <div class="row">
                    <label class="flex flex-col" for="fullname">
                        <span class="font-semibold">Full name</span>
                        <input id="fullname" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text" v-model="fullName" placeholder="iMoney..." />
                    </label>
                </div>
                 <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email</span>
                        <input v-model="email" id="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="email" placeholder="Email..." />
                    </label>
                </div>
                 <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input v-model="password" id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password" placeholder="Password..." />
                    </label>
                </div>
                <div class="row">
                  <button v-if="!isPending" type="submit" class="py-3 text-center w-full bg-primary text-white font-bold border rounded-lg">
                    Sign up
                    </button>  
                     <button v-else type="button" class="py-3 text-center w-full bg-gray-800 text-white font-bold border rounded-lg cursor-not-allowed" disabled>
                    Loading
                    </button>  
                </div>
            </form>
            <div v-if="error" class="text-left mt-4">
                <span class="text-red">{{ error }}</span>
            </div>
            <div class="w-full text-center mt-6">
                <span class="font-semibold">
                    I'm already a member
                </span>
                <span class="ml-1"><router-link :to="{ name: 'Login', params: {} }" class="text-primary font-bold">Sign In</router-link></span>
            </div>
        </div>

    </div>
</template>
<script>
import { ref } from "vue"
import { useSignUp } from "@/composables/useSignUp"
import { useRouter} from "vue-router"
export default {
    setup(){
        const { error , isPending, signUp} = useSignUp()
        const router = useRouter()
        const fullName = ref("");
        const email = ref("");
        const password = ref("");

        async function onSubmit() {
           await signUp(email.value, password.value, fullName.value)
           if(error.value === null) router.push({ name: 'Login', params:{}})
        }
        return { fullName, email, password, error, isPending, onSubmit}
    }
}
</script>