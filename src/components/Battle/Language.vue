<template>
    <v-card class="mx-auto" max-width="300" elevation="10" @click="selectedPlayer">
        <v-img contain :alt="name" height="200" :src="src"></v-img>
    </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "vuetify",
    },
    imgsrc: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    src: '',
  }),
  mounted() {
    this._requireSrc();
  },
  methods: {
    _requireSrc() {
      this.src = require('./../../assets/players/'+this.imgsrc);
    },
    selectedPlayer() {
      this.$emit('selected-id', this.id);
    }
  }
};
</script>