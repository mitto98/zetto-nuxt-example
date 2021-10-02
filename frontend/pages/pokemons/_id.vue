<template>
  <div class="p-4">
    <div v-if="!$fetchState.pending">
      <crud-read :entity="$route.params.id" :action="action" />
    </div>
  </div>
</template>

<script>
import Portofino from '@manydesigns/portofino';

export default {
  data() {
    return {
      action: null,
    };
  },
  async fetch() {
    this.action = await Portofino.getAction('pokemons');
  },
};
</script>
