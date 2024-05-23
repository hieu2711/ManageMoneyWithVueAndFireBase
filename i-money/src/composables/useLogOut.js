import { ref } from "vue";
import { projectAuth } from "@/configs/firebase"; 
import { signOut } from "firebase/auth";

const error = ref(null);

async function logOut() {
    error.value = null;
    try {
        await signOut(projectAuth); 
    } catch (err) {
        console.error("Error from Firebase:", err);
        error.value = err.message;
    }
}

export function useLogOut() {
    return { error, logOut }
}
