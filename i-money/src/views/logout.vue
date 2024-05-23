<template>
    <h1>Logout page</h1>
</template>
<script>
import { useRouter } from "vue-router";
import { useLogOut } from "@/composables/useLogOut"
export default {
    setup(){
    const router = useRouter()
    const { error, logOut } = useLogOut()
    
    async function onLogout(){
        await logOut()
        if(!error.value) router.push({ name:"Login" , params: {}})
    }
    onLogout();
    return {}
    }
}
</script>