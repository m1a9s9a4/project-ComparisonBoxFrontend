<template>
    <v-main>
        <v-card class="mx-auto" max-width="300" elevation="10">
            <a :href="'/detail/'+english">
            <v-img contain :alt="name" height="200" :src="src"></v-img>
            </a>
        </v-card>
        <h4 class="text-center">{{name}}</h4>
    </v-main>
</template>

<script>
export default {
  props: {
    english: {
      type: String,
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
    src: ''
  }),
  mounted() {
    this._requireImg();
  },
  methods: {
    _requireImg() {
      this.src = require('./../../assets/players/' + this.imgsrc);
    }
  },
};
</script>