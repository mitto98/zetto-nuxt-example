<template>
  <div v-if="!$fetchState.pending" class="p-4">
    <crud-update
      :action="action"
      :entity="$route.params.id"
      :title="true"
      submit-label="Salva le modifiche"
    />
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
    this.action = await Portofino.getAction('trainers');
  },
};
</script>
