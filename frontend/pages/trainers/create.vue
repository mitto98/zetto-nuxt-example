<template>
  <div class="p-4">
    <div v-if="!$fetchState.pending">
      <crud-create :action="action" submit-label="Crea allenatore" />
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
