<template>
    <div class="pt-4">
        <div
            class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg">
            </div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg">
            </div>
            <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <div
            class="relative mx-auto w-[272px] h-[572px] px-4 py-4 bg-slate-500">
            <div class="overflow-hidden ">
                <div class="text-center">
                    <h1
                        class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span
                            class="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                            xPhone
                        </span>
                    </h1>


                    <p class="mt-2 text-s leading-1 text-slate-200">Daniels super super un-organised gallery</p>

                    <form class="flex items-center pt-4 pb-2">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                            </div>
                            <input type="text" id="simple-search" v-model="textTerm"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search something..." required>
                        </div>
                        <button @click.prevent="textSearch()"
                            class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 25 25">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                        <label
                            class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                            <svg class="w-4 h-4" viewBox="1 2 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                                        stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                                        stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <input @change.prevent="convertImage" type='file' class="hidden" />
                        </label>
                    </form>
                </div>
                <div class="w-auto h-screen overflow-auto touch-pan-y">
                    <div v-if="show" class="grid grid-cols-2 md:grid-cols-2 gap-2">
                        <div v-for="image in images" :key="image">
                            <img class="object-cover h-36 w-36 max-w-full rounded-lg"
                                :src="image" alt="">
                        </div>
                    
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                        <div v-for="result in response" :key="result">
                            <img class="object-cover h-36 w-36 max-w-full rounded-lg "
                                :src="`/images/${result.properties.name}`" alt="">
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
            </div>
        </div>
</template>

<script setup>

const mobileMenuOpen = ref(false)
const base64File = ref()
const response = ref()
const textTerm = ref('')
const showRecs = ref(false)
const generatedRecs = ref()
const loading = ref(false)
const show = ref(true)

const { data: images } = await useFetch('/api/images')


function convertImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();



    reader.onload = async () => {
        // base64File.value = ;
        base64File.value = toString(reader.result.split(',')[1]);
        // console.log(toString(reader.result.split(',')[1]))

        // explore this data piping 
        await searchImage(reader.result)

    };



    reader.onerror = error => {
        console.error('Error reading file:', error);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}


async function searchImage(file) {
    loading.value = true

    response.value = await $fetch('/api/search', {
        method: 'post',
        body: JSON.stringify({
            data: file,
        })
    })
    loading.value = false
}


async function textSearch() {
    showRecs.value = false
    loading.value = true
    let res = await $fetch(`/api/search?query=${textTerm.value}`)
    response.value = res
    console.log(res)

    generatedRecs.value = res.generated
    loading.value = false
    show.value = false

}
</script>