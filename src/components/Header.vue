<template>
        <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="COMBOX logo"
          class="shrink mr-2"
          contain
          src="../assets/logo_transparent.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      
      <v-spacer></v-spacer>

      <v-toolbar-title>COMBOX</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon href="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
</template>