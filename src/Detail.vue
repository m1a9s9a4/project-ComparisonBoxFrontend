<template>
  <v-main>
    <h2 v-if="player.japanese" class="text-center">
      「{{ player.japanese }}」と比較する<br />対象を選びましょう
    </h2>
    <v-row>
      <template v-if="players.length > 0">
        <v-col cols="6" md="3" v-for="(p, i) in players" v-bind:key="i">
          <Language
            :name="p.japanese"
            :imgsrc="p.img"
            :link="'/' + player.english + '/vs/' + p.english"
          />
          <v-row>
            <v-col>
              <v-btn
                block
                color="primary"
                :href="'/' + player.english + '/vs/' + p.english + '/'"
                >回答はこちら</v-btn
              >
            </v-col>
            <v-col>
              <v-btn
                block
                color="info"
                :href="
                  '/detail/' + player.english + '/answers/' + p.english + '/'
                "
                >結果はこちら</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </template>
      <template v-else>
        <Loading />
      </template>
    </v-row>
  </v-main>
</template>

<script>
import Axios from "axios";
import Language from "./components/Detail/Language";
import Loading from "./components/Common/Loading";

export default {
  data: () => ({
    english: null,
    player: {},
    battles: [],
    players: [],
  }),
  created: function () {
    this.english = this.$route.params["eng"];
    this.getPlayerByEnglish();
  },
  components: {
    Language,
    Loading,
  },
  methods: {
    getPlayerByEnglish: function () {
      Axios.get(
        process.env.VUE_APP_API_URL + "/api/v1/player/english/" + this.english
      )
        .then((res) => {
          this.player = res.data;
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          this.getBattledPlayers();
        });
    },
    getBattledPlayers: function () {
      Axios.get(
        process.env.VUE_APP_API_URL + "/api/v1/battle/player/" + this.player.id
      )
        .then((res) => {
          // battleがなかったときに他の候補を表示する処理を追加
          this.battles = this._filterPlayers(res.data);
        })
        .finally(() => {
          this.getPlayers();
        });
    },
    firstPlayerById: function (id) {
      Axios.get(process.env.VUE_APP_API_URL + "/api/v1/player/" + id).then(
        (res) => {
          this.players.push(res.data);
        }
      );
    },
    getPlayers: function () {
      this.battles.map((b) => {
        this.firstPlayerById(b);
      });
    },
    _filterPlayers: function (battles) {
      return battles.map((b) => {
        if (b.player_1_id == this.player.id) {
          return b.player_2_id;
        }
        return b.player_1_id;
      });
    },
  },
};
</script>