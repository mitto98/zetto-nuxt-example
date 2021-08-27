<template>
  <div
    v-if="value"
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="$emit('input', null)"
      />

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              id="modal-title"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              Eliminare?
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Vuoi davvero eliminare questo elemento?
              </p>
              <div
                v-if="error"
                class="py-3 px-5 my-4 bg-red-100 text-red-900 text-sm rounded-md border border-red-200"
                role="alert"
              >
                {{ error }}
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="btn border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
            :disabled="loading"
            @click="doDelete"
          >
            <svg
              v-if="loading"
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Elimina
          </button>
          <button
            type="button"
            class="btn mt-3 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 sm:mt-0"
            @click="$emit('input', null)"
          >
            Annulla
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'action'],
  data: () => ({
    loading: false,
    error: null,
  }),
  methods: {
    async doDelete() {
      this.loading = true;
      try {
        await this.action.delete(this.value);
      } catch (e) {
        this.error = e;
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.btn {
  @apply w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 font-medium text-base focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm;
}
</style>
