import { ref } from "vue"
import { projectAuth } from "@/configs/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const error = ref(null)
const isPending = ref(false)

async function signUp(email, password, fullname) {
    error.value = null;
    isPending.value = true;
    try {
        const response = await createUserWithEmailAndPassword(projectAuth, email, password);
        if (!response) {
            throw new Error('Error in register');
        } else {
            await updateProfile(response.user, { displayName: fullname });
            return response;
        }
    } catch(err) {
        console.error("Error from Firebase:", err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignUp(){
    return { error, isPending, signUp}
}