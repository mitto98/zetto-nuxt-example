<template>
  <div class="flex">
    <div class="flex flex-row min-h-screen">
      <div class="flex flex-col w-60 text-gray-200 bg-gray-800 flex-shrink-0">
        <div
          class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
        >
          <a
            href="#"
            class="text-lg font-semibold tracking-widest uppercase rounded-lg text-white focus:outline-none focus:shadow-outline"
            >Zetto UI</a
          >
        </div>
        <nav class="flex-grow block px-4 pb-4 pb-0 overflow-y-auto">
          <n-link to="/" class="button">Home</n-link>
          <n-link to="/istituti" class="button">Istituti</n-link>
        </nav>
      </div>
    </div>
    <div class="w-full">
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div
              class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
            ></div>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    type="button"
                    class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="p-4">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
  }),
};
</script>

<style>
.button {
  @apply block px-4 py-2 mt-2 text-sm font-semibold rounded-lg text-gray-200 bg-transparent hover:text-white hover:bg-gray-600 focus:text-white focus:bg-gray-600 focus:outline-none;
}

.nuxt-link-exact-active {
  @apply bg-gray-700;
}
</style>
