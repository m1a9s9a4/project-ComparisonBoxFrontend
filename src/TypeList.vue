<template>
    <v-main>
        <h2 v-if="playerType" class="text-center">{{playerType.japanese}}</h2>
        <p class="text-center subtitle">アンケートに回答したいもしくは結果をみたい{{playerType.japanese}}を一つタップしましょう。</p>
        <template v-if="playerType.Players.length > 0">
            <v-row>
                <v-col md="3" cols="6" v-for="(player, i) in playerType.Players" :key="i">
                    <Language 
                        :name=player.japanese
                        :english=player.english
                        :imgsrc=player.img
                    />
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <Loading />
        </template>
    </v-main>
</template>

<script>
import Language from './components/Home/Language';
import Loading from './components/Common/Loading';
import axios from 'axios';

export default {
    components: {
        Language,
        Loading,
    },
    data () {
        return {
            playerType: {},
            siteUrl: '',
        }
    },
    methods: {
        getTypeWithPlayers() {
            axios
                .get(process.env.VUE_APP_API_URL + '/api/v1/player_type/' + this.$route.params["tid"])
                .then(res => {
                    this.playerType = res.data;
                });
        },
    },
    mounted: function () {
        this.getTypeWithPlayers();
        this.siteUrl = process.env.VUE_APP_URL;
    },
}
</script>