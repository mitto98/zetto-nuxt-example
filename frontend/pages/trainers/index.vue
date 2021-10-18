<template>
  <div v-if="!$fetchState.pending">
    <b-modal
      :visible="!!deleting"
      title="Elimina allenatore"
      @change="deleting = null"
      @ok="doDelete"
    >
      <h6>Vuoi eliminare questo allenatore?</h6>
      <b-alert :show="!!error" variant="danger">
        {{ error }}
      </b-alert>
    </b-modal>

    <crud-search
      id="trainers"
      :action="action"
      :title="true"
      :search="true"
      :fields="{ actions: { label: 'Azioni' } }"
      :searchFields="{ birth_country: { inline: true } }"
      :buttons="tableButtons"
    >
      <template #cell(username)="{ item, value }">
        <n-link :to="`/trainers/${item.key}`" custom v-slot="{ navigate }">
          <button
            class="btn btn-link p-0"
            :href="`/trainers/${item.key}`"
            @click.prevent="navigate"
          >
            {{ value }}
          </button>
        </n-link>
      </template>
      <template #cell(actions)="{ item }">
        <div class="d-flex item-center justify-center">
          <n-link
            :to="`/trainers/${item.key}/edit`"
            custom
            v-slot="{ navigate }"
          >
            <button
              class="btn btn-link p-0"
              role="button"
              aria-label="Modifica"
              @click="navigate"
              @keypress.enter="navigate"
            >
              <b-icon icon="pencil" />
            </button>
          </n-link>
          <button
            class="btn btn-link p-0"
            role="button"
            aria-label="Elimina"
            @click="deleting = item.key"
          >
            <b-icon icon="trash" />
          </button>
        </div>
      </template>
    </crud-search>
  </div>
</template>

<script>
import Portofino from '@manydesigns/portofino';

export default {
  data: () => ({
    action: null,
    loading: false,
    error: null,
    deleting: null,
  }),
  async fetch() {
    this.action = await Portofino.getAction('trainers');
  },
  computed: {
    tableButtons() {
      return [
        {
          label: 'Crea allenatore',
          onClick: () => this.$router.push('/trainers/create'),
          variant: 'primary',
        },
        { label: 'Aggiorna', onClick: this.refresh },
      ];
    },
  },
  methods: {
    refresh() {
      this.$zetto.refresh('trainers');
    },
    async doDelete(event) {
      event.preventDefault();
      this.loading = true;
      try {
        await this.action.delete(this.deleting);
        this.deleting = null;
        this.error = null;
      } catch (e) {
        this.error = e.response?.data?.message || "C'è stati un errore 🤭";
      }
      this.$zetto.refresh('trainers');
      this.loading = false;
    },
  },
};
</script>
