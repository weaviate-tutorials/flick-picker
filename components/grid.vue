<template>
    <div class="max-w-screen-xl mx-auto px-5 sm:p-10 md:p-16">
    <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        <div v-for="result in searchResults">

        <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center">
            <img 
            :src="`/image/${result.name}`">
            <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
            </div>
            <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                <a href="#"
                    class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Name</a>
                
            </div>
            
        </div>
        
    </div>

       

    </div>
</div>
</template>

<script setup>
const props = defineProps(['searchResults'])
</script>