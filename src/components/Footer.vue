<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
        href="/"
      >
        トップ
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
        href="/#how-to-use"
      >
        使い方
      </v-btn>      
      <v-col class="primary py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>COMBOX</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>