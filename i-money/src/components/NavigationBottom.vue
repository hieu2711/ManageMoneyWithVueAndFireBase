<template>
    <footer id="footer" class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4">
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between h-full items-center">
                <li v-for="navItem in navItems" :key="navItem.name">
                    <router-link :to="{ name: navItem.name}">
                        <i class="t2ico " :class="navItem.icon"></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <div data-circle><router-link :to="{ name:'NewTransactions', params:{} }">+</router-link></div>
    </footer>
</template>
<script>
import { reactive } from "vue"
import { navItemFooter } from "@/constant"
export default {
    setup(){
        const navItems = reactive(navItemFooter)

        return { navItems }
    }
}
</script>
<style lang="css" scoped>
footer#footer > div[data-circle]{
    background: blue;
    position: absolute;
    font-size: 1.5rem;
    font-family: "t2ico";
    width: 48px;
    height: 48px;
    margin-top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 100%;
    left:50%;
    transform: translateX(-50%);
    cursor: pointer;
}


</style>