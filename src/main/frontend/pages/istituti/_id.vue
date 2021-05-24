<template>
  <div class="p-4">
    <div class="flex mb-5">
      <h1 class="text-3xl font-bold leading-7 text-gray-900">Istituto</h1>
    </div>
    <div v-if="!$fetchState.pending">
      <crud-read :id="$route.params.id" :action="action" />
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
    this.action = await Portofino.getAction('istituti');
  },
};
</script>
