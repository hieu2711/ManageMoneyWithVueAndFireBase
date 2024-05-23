import { ref } from 'vue';
import { projectStorage } from '@/configs/firebase'; 
import { useUser } from './useUser';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import the necessary functions from firebase/storage

const useStorage = (name) => {
    const error = ref(null);
    const filePath = ref(null);
    const url = ref(null);

    async function uploadsFile(file) {
        const { getUser } = useUser(); // Correctly call useUser to get getUser
        const { user } = getUser(); // Correctly call getUser to get user
        filePath.value = `${name}/${user.value.uid}/${file.name}`;
        const fileRef = storageRef(projectStorage, filePath.value);
        error.value = null;
        try {
            const snapshot = await uploadBytes(fileRef, file);
            url.value = await getDownloadURL(snapshot.ref);
            return url.value;
        } catch (err) {
            console.error('Error from Firebase:', err);
            error.value = err.message;
        }
    }

    return { error, uploadsFile, filePath, url };
}

export default useStorage;
