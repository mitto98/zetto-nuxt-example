<template>
  <div class="container-fluid">
    <div v-if="!$fetchState.pending" class="row">
      <div class="col-md-4">
        <crud-read
          :entity="$route.params.id"
          :action="action"
          :fields="{ id: { display: false } }"
        />
      </div>
      <div class="col-md-8">
        <h2>Pokemon posseduti</h2>
        <crud-search :action="trainerPoke">
          <template #cell(pokemon)="{ item }">
            <n-link :to="`/pokemons/${item.key}`">
              {{ item.getDisplayValue('pokemon') }}
            </n-link>
          </template>
        </crud-search>
      </div>
    </div>
  </div>
</template>

<script>
import Portofino from '@manydesigns/portofino';

export default {
  data() {
    return {
      action: null,
      trainerPoke: null,
    };
  },
  async fetch() {
    this.action = await Portofino.getAction('trainers');
    this.trainerPoke = await this.action.getAction(
      `${this.$route.params.id}/pokemons`
    );
  },
};
</script>
