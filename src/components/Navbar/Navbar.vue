<template>
    <div class="bg-blue-400">
        <nav class="flex justify-between items-center container mx-auto py-2 px-16 ">
            <div class="flex items-center">
                <mdicon class="text-white " name="language-typescript" />
                <mdicon class="text-white mx-1" name="vuejs" />
                <router-link class="text-2xl italic text-white font-semibold" to="/"><span class="text-green-400 font-semibold">E</span>-COMMERCE</router-link>
            </div>
                <div class="flex items-center">
                    <button class="mx-2 hover:scale-110">
                        <mdicon  class="text-white" name="cart" />
                    </button>
                    <button class="border rounded-full py-1 px-4 text-white font-medium ml-4 hover:bg-white hover:text-slate-400 hover:scale-110">
                        Sign Up | Sign In
                    </button>
                </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

</style>