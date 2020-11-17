<template>
  <v-main>
    <h2 v-if="word" class="text-center">
      「{{ word }}」の検索結果です
    </h2>
    <v-row>
      <template v-if="players.length > 0">
        <v-col cols="6" md="3" v-for="(p, i) in players" v-bind:key="i">
          <Language
            :name="p.japanese"
            :imgsrc="p.img"
            :link="'/detail/'+p.english"
          />
        </v-col>
      </template>
      <template v-else>
          検索結果はありません。
      </template>
    </v-row>
  </v-main>
</template>

<script>
import Language from './components/Search/Language';
import axios from 'axios';

export default {
    components: {
        Language,
    },
    data: function() {
        return {
            players: {},
            word: '',
        }
    },
    created() {
        this.search();
        this.word = this.$route.params['word'];
    },
    methods: {
        search() {
            axios.
                get('/api/v1/search/'+this.$route.params['word']).
                then(res => {
                    this.players = res.data;
                    console.log(this.players);
                });
        }
    }
}
</script>