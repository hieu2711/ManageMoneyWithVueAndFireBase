<template>
    <form @submit.prevent="onSubmit">
        <div class="row mt-8">
            <div class="bg-zinc-50 rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label class="flex items-end" for="total">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold">USD</span>
                            </div>
                            <div class="flex flex-col border-b border-gray-100 pb-1">
                            <span class="font-semibold text-xs text-dark">Total</span>
                            <input v-model="total" id="total" class="text-4xl text-dark w-full outline-none mt-1" type="number" placeholder="0" />
                        </div>
                        </label>
                       
                    </div>

                    <div class="row">
                        <label class="flex items-center" for="category">
                            <div class=" flex flex-none items-center w-10 text-right leading-10 mr-4">
                                <span class="inline-block ml-auto bg-yellow-400 w-8 h-8 rounded-full"></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input v-model="category" id="category" class="text-xl text-dark w-full outline-none mt-1" type="text" placeholder="Select a category" />
                            </div>
                        </label>
                       
                    </div>

                    <div class="row">
                        <label class="flex items-center" for="note">
                            <div class=" flex flex-none items-center w-10 text-right leading-10 mr-4">
                                <span class="flex-none w-10 mr-4">
                                    <i class="t2ico t2ico-document text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input v-model="note" id="note" class=" text-dark w-full outline-none mt-1" type="text" placeholder="Note" />
                            </div>
                        </label>
                       
                    </div>

                    <div class="row">
                        <label class="flex items-center" for="time">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="t2ico t2ico-calendar text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1  py-2 border-b border-gray-100">
                                <div class="text-dark w-full">{{  new Date() }}</div>
                            </div>
                        </label>
                       
                    </div>

                    <div class="row">
                        <label class="flex items-center" for="wallet">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="t2ico t2ico-wallet text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1  py-2">
                                <div class="text-dark w-full">My wallet</div>
                            </div>
                        </label>
                       
                    </div>

                </div>
            </div>
        </div>

        <div class="row mt-8" v-if="!isMoreDetails">
            <button @click="isMoreDetails = true" class="bg-white rounded-lg py-3 w-full text-primary font-semibold">More details</button>
        </div>
        <template v-if="isMoreDetails">
            <div class="row mt-8">
            <div class="bg-zinc-50 rounded-lg py-4">
                <div class="container mx-auto px-8">

                    <div class="row">
                        <label class="flex items-center" for="location">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="t2ico t2ico-location text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1  py-2 border-b border-gray-100">
                                <input v-model="location" id="location" class="text-xl text-dark w-full outline-none mt-1" type="text" placeholder="Select a location" />
                            </div>
                        </label>
                       
                    </div>

                    <div class="row">
                        <label class="flex items-center" for="withPreson">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="t2ico t2ico-users text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1  py-2">
                                <input v-model="person" id="withPreson" class="text-xl text-dark w-full outline-none mt-1" type="text" placeholder="With person" />
                            </div>
                        </label>
                       
                    </div>

                </div>
            </div>
        </div>

        <div class="row">
            <div class="bg-zinc-50 rounded-lg">
                <div class="container mx-auto px-8">

                    <div class="row">
                        <label class="flex items-center text-primary" for="file">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end ">
                                    <i class="t2ico t2ico-camera text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1  py-2">
                               <div class="w-full font-semibold">
                                Upload photos
                               </div>
                               <input id="file" type="file" class="w-0 h-0 overflow-hidden absolute" @change="onChangeFile"/>
                            </div>
                        </label>
                       
                    </div>

                </div>
            </div>
        </div>

        <div class="text-red flex justify-center">{{ errFile }}</div>
        </template>
        <button type="submit" class="bg-primary text-white ">TEST</button>
    </form>
</template>
<script>
import { ref } from 'vue';
import { useUser } from '@/composables/useUser';
import useCollection from '@/composables/useCollection';
import useStorage from '@/composables/useStorage'
export default {
    setup(){
    const { getUser } = useUser()
    const isMoreDetails = ref(false)
    const { error, addRecords} = useCollection('transaction')
    const { url, uploadsFile } = useStorage('transaction');

    const total = ref(0)
    const category = ref("")
    const note = ref("")
    const time = ref(new Date())
    const location = ref("");
    const person = ref("")
    const file = ref(null)
    const errFile = ref(null)

    function onChangeFile(event) {
        const selected = event.target.files[0];
        const typesFile = ["image/png", "image/jpeg"];

        if(selected && typesFile.includes(selected.type)){
            file.value = selected
            console.log(file.value)
        }else{
            file.value = null
            errFile.value = "Please choose a file type png or jpg"
            console.log(errFile.value)
        }
    }

    async function onSubmit(){
        if(file.value) await uploadsFile(file.value)
        console.log("url file" + url)
        const { user } = getUser()
        const transaction = {
            total:parseInt(total.value),
            category: category.value,
            note: note.value,
            time: time.value,
            location: location.value,
            person: person.value,
            userId: user.value.uid,
            thumbnails: url.value,
        }
        await addRecords(transaction);
        console.log(error)
        console.log("Created")
    }
        return{
            onSubmit, isMoreDetails, total, category, time, note, onChangeFile, errFile, location, person
        }
    }
}
</script>