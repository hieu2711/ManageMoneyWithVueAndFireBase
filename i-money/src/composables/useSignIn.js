import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
    error.value = null;
    isPending.value = true;
    try {
        const response = await signInWithEmailAndPassword(projectAuth, email, password);
        if (!response) {
            throw new Error('Error in Login');
        } else {
            return response;
        }
    } catch (err) {
        console.error("Error from Firebase:", err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignIn() {
    return { error, isPending, signIn }
}
