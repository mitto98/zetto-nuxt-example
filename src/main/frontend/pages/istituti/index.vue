<template>
  <div class="p-4">
    <div class="flex mb-5">
      <h1 class="text-3xl font-bold leading-7 text-gray-900">Istituti</h1>
      <n-link
        to="/istituti/create"
        class="bg-blue-100 text-blue-800 text-bold rounded-full ml-3 px-2"
        >+</n-link
      >
    </div>

    <div v-if="!$fetchState.pending">
      <delete-modal v-model="deleting" :action="action" />
      <crud-search :action="action" :fields="{ actions: { label: 'Azioni' } }">
        <template #cell(id)="{ value }">
          <n-link :to="`/istituti/${value}`" class="text-blue-500 underline">
            {{ value }}
          </n-link>
        </template>
        <template #cell(actions)="{ item }">
          <div class="flex item-center justify-center">
            <div
              class="w-4 mr-2 transform hover:text-blue-800 hover:scale-110 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div
              class="w-4 mr-2 transform hover:text-blue-800 hover:scale-110 cursor-pointer"
              @click="deleting = item.key"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </template>
      </crud-search>
    </div>
  </div>
</template>

<script>
import Portofino from '@manydesigns/portofino';

export default {
  data: () => ({
    action: null,
    deleting: null,
  }),
  async fetch() {
    this.action = await Portofino.getAction('istituti');
  },
};
</script>
