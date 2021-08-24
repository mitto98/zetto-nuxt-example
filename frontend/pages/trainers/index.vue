<template>
  <div v-if="!$fetchState.pending">
    <delete-modal v-model="deleting" :action="action" />
    <crud-search
      id="trainers"
      :action="action"
      :title="true"
      :search="true"
      :buttons="[{ label: 'Aggiorna', onClick: reload }]"
      :fields="{ actions: { label: 'Azioni' } }"
      :searchFields="{ birth_country: { inline: true } }"
    >
      <template #cell(username)="{ item, value }">
        <n-link :to="`/trainers/${item.key}`" class="text-blue-500 underline">
          {{ value }}
        </n-link>
      </template>
      <template #cell(actions)="{ item }">
        <div class="d-flex item-center justify-center">
          <button class="btn btn-link p-0" role="button" aria-label="Modifica">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style="width: 20px; height: 20px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button
            class="btn btn-link p-0"
            role="button"
            @click="deleting = item.key"
            aria-label="Elimina"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style="width: 20px; height: 20px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </template>
    </crud-search>

    <n-link class="btn btn-primary" to="/trainers/create"
      >Crea allenatore</n-link
    >
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
    this.action = await Portofino.getAction('trainers');
  },
  methods: {
    reload() {
      this.$zetto.reload('trainers');
    },
  },
};
</script>
