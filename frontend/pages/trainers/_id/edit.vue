<template>
  <div class="p-4">
    <div v-if="!$fetchState.pending">
      <crud-update
        :entity="$route.params.id"
        :action="action"
        submit-label="Salva le modifiche"
      />
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
    this.action = await Portofino.getAction('trainers');
  },
};
</script>
