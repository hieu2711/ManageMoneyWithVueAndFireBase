import { ref } from 'vue';
import { fireStoreCore } from '@/configs/firebase'; 
import { addDoc, collection } from 'firebase/firestore';

const useCollection = (name) => {
    const error = ref(null);

    async function addRecords(record) {
        error.value = null;
        try {
            const colRef = collection(fireStoreCore, name);
            const response = await addDoc(colRef, record);
            return response;
        } catch (err) {
            console.error('Error from Firebase:', err);
            error.value = err.message;
        }
    }

    return { error, addRecords };
}

export default useCollection;
