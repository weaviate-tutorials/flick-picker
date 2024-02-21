<template>
    <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <p class="w-12 h-12 text-indigo-600 bg-indigo-50 rounded-full flex items-center justify-center">
                            🤳🏾
                        </p>
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <button @click="mobileMenuOpen = !mobileMenuOpen"> 🍔 </button>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                        class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 grid lg:justify-end">
                    <span aria-hidden="true" class="pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg></span>
                    <span href="#" class="text-sm font-semibold leading-6 text-gray-900">Star on GitHub </span>
                </div>
            </nav>
            <span v-if="mobileMenuOpen" as="div" class="lg:hidden">
                <div class="fixed inset-0 z-50" />
                <span
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="" />
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <button @click="mobileMenuOpen = !mobileMenuOpen">x</button>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                        item.name }}</a>
                            </div>
                            <div class="py-6">
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                    in</a>
                            </div>
                        </div>
                    </div>
                </span>
            </span>
        </header>

        <div class="relative isolate px-6 lg:px-8">
            <div class="absolute inset-x-0 -top-40 pt-14 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-16 sm:py-2 lg:pt-40">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Powered by Multimodal Search in Weaviate. <a href="#" class="font-semibold text-indigo-600"><span
                                class="absolute inset-0" aria-hidden="true" />Read
                            more <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div class="text-center">
                    <h1
                        class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span
                            class="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">FlickPickerGPT</span>
                    </h1>


                    <p class="mt-6 text-lg leading-8 text-gray-600">Skip the hunt, find your background noise film for the
                        perfect 3 hour after work scroll session.</p>

                    <form class="flex items-center pt-4">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                            </div>
                            <input type="text" id="simple-search" v-model="textTerm"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search something.. come on" required>
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

                <div v-if="!showRecs" class="text-center mt-4">
                    <button @click="showRecs =! showRecs"
                        class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        flickpick it ✨
                    </button>

                </div>

            </div>
            <article v-if="showRecs" class="rounded-xl bg-white mx-60 ring ring-indigo-50 mt-6 sm:p-6 lg:p-8 ">
                <div class="flex items-start sm:gap-8">
                    <div class="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-black"
                        aria-hidden="true">
                        <div class="flex items-center gap-1">
                            <p class="text-7xl font-medium">
                                🎞️
                            </p>
                        </div>
                    </div>

                    <div>
                        <strong
                            class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                            we have a winner 🫡
                        </strong>


                        <p class="mt-1 text-sm text-gray-700 font-semibold mt-3">
                            {{ generatedRecs }}
                        </p>

                    </div>
                </div>
            </article>
            <Grid :search-results="response" />
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import weaviate from "weaviate-ts-client";

const runtimeConfig = useRuntimeConfig()

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
    headers: {
        'X-OpenAI-Api-Key': runtimeConfig.public.openai,
    },
});

const navigation = [
    { name: 'Product', href: '#' },

]

const mobileMenuOpen = ref(false)
const imageFile = ref()
const base64File = ref()
const response = ref()
const textTerm = ref('')
const showRecs = ref(false)
const generatedRecs = ref()

function convertImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        // base64File.value = ;
        base64File.value = toString(reader.result.split(',')[1]);
        // console.log(toString(reader.result.split(',')[1]))
        // explore this data piping 
        searchImage(reader.result)

    };



    reader.onerror = error => {
        console.error('Error reading file:', error);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

async function searchImage(base64) {
    const task = "from this list of movies, recommend one standout and tell me why you recommend it in a sarcastic teen tone"
    let result = await client.graphql
        .get()
        .withClassName('MovieTestBind')
        .withGenerate({
            groupedTask: task,
            groupedProperties: ['title']
        })
        .withFields('media name image overview title')
        .withNearImage({
            image: base64
        })
        .withLimit(4)
        .do();
    
    generatedRecs.value = result.data.Get.MovieTestBind[0]._additional.generate.groupedResult
    response.value = result.data.Get.MovieTestBind
    return result
}


async function textSearch() {
    const task = "from this list of movies, recommend one standout and tell me why you recommend it in a sarcastic teen tone"
    const res = await client.graphql
        .get()
        .withClassName("MovieTestBind")
        .withGenerate({
            groupedTask: task,
            groupedProperties: ['title']
        })
        .withFields("image title media name overview")
        .withNearText({ concepts: [`"${textTerm.value}"`] })
        .withLimit(4)
        .do();

    generatedRecs.value = res.data.Get.MovieTestBind[0]._additional.generate.groupedResult
    response.value = res.data.Get.MovieTestBind


}
</script>