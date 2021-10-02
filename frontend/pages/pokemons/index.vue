<template>
  <div v-if="!$fetchState.pending">
    <crud-search :action="action" :title="true" :search="true">
      <template #cell(name)="{ item, value }">
        <n-link :to="`/pokemons/${item.key}`">
          {{ value }}
        </n-link>
      </template>
      <template #cell(primary_type)="{ value }">
        <span
          class="badge badge-primary"
          :style="{ backgroundColor: pillColor(value) }"
          >{{ value }}</span
        >
      </template>
      <template #cell(secondary_type)="{ value }">
        <span
          class="badge badge-primary"
          :style="{ backgroundColor: pillColor(value) }"
          >{{ value }}</span
        >
      </template>
    </crud-search>
  </div>
</template>

<script>
import Portofino from '@manydesigns/portofino';

const TypesColor = {
  grass: '#78c850',
  fire: '#f08030',
  water: '#6990f0',
  bug: '#A8B820',
  normal: '#A8A878',
  poison: '#A040A0',
  electric: '#F8D030',
  ground: '#E0C068',
  fairy: '#EE99AC',
  fighting: '#C03028',
  psychic: '#F85888',
  rock: '#B8A038',
  ghost: '#705898',
  ice: '#98D8D8',
  dragon: '#7038F8',
};

export default {
  data: () => ({
    action: null,
  }),
  async fetch() {
    this.action = await Portofino.getAction('pokemons');
  },
  methods: {
    pillColor(type) {
      return TypesColor[type];
    },
  },
};
</script>
