<template>
    <v-card class="mx-auto" max-width="300" elevation="10">
        <a :href="link">
          <v-img contain :alt="name" height="200" :src="src"></v-img>
        </a>
    </v-card>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
    name: {
      type: String,
      default: "vuetify",
    },
    imgsrc: {
      type: String,
      default: "logo.png",
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
      let imgsrc = this.imgsrc;
      if (imgsrc == '') {
        imgsrc = 'logo.png';
      }

      let directory = 'players/';
      if (imgsrc == 'logo.png') {
        directory = ''
      }
      this.src = require('./../../assets/'+ directory + this.imgsrc);
    }
  },
};
</script>