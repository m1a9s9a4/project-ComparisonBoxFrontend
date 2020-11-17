<template>
    <v-main>
        <template>
            <v-img src="./assets/logo.png" max-height="600px" contain></v-img>
            <h2 class="text-center">「COMBOX」とは</h2>
            <p class="py-5">
                COMBOXとは、同じ分野のもの同士を比較することで人気や他の人の考え方の傾向を知ることで新しいアイディアのきっかけや一歩を踏み出せるようになることを目標として作られたサービスです。
                より多くのデータが集まれば自分のしようとしてることの参考にできたり知りたかった情報がわかったりすると思うのでぜひご自身でも回答して友人にもシェアしてください！
                <v-row>
                    <v-col>
                        <Twitter title="COMBOXで言語のトレンドがわかる！" text="友達にも聞いてみましょう！" :url="siteUrl"/>
                    </v-col>
                </v-row>
            </p>
        </template>
        <template>
            <h2 class="text-center" id="how-to-use">
                使い方について
            </h2>
            <HowToUse 
                step="1" 
                text="最初に比較したい分野のプログラミング言語やフレームワークを選びます。ご自身が知っているものをタップしていきましょう。今はプログラミング言語やWebフレームワーク、JSフレームワークの比較が可能です。" 
                img="how_to_use_1.png"
            />
            <HowToUse 
                step="2" 
                text="Step 2.では比較する対象を選びます。Step 1.で選択したものと同じ分野で他に知っている言語やフレームワークの「回答をする」タップしましょう。" 
                img="how_to_use_2.png"
            />
            <HowToUse 
                step="3" 
                text="アンケート開始です。それぞれの質問に対してあなたが該当すると思う方をタップしていきましょう。例えば、「書きやすさ」や「開発環境の作りやすさ」などの質問があります。" 
                img="how_to_use_3.png"
            />
            <HowToUse 
                step="4" 
                text="ご自身が回答したものはもちろん、まだ回答してなくてなかったり触ったことがないけど興味があったりする分野の結果も確認することができます。結果は質問ごとのパーセンテージで表示されます。ご自身が思ってた結果と比較してみましょう。" 
                img="how_to_use_4.png"
            />
        </template>
        <template v-if="playerTypes.length > 0">
            <h2 class="text-center">回答受付中の分野</h2>
            <p class="py-5">
                現在 {{playerTypes.length}} 個の分野の回答を受付中です！まだ回答受付してない分野も随時追加予定ですので、ぜひその際はアンケートにご協力お願いします！
                <v-row>
                    <v-col cols="12" md="6" v-for="(type, i) in playerTypes" v-bind:key="i">
                        <v-btn block color="primary" :href="'/type/'+type.id">{{type.japanese}}({{type.Players.length}})</v-btn>
                    </v-col>
                </v-row>
            </p>
            <h2 class="text-center">回答受付予定</h2>
            <p class="py-5">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-btn block disabled>CICD</v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn block disabled>toC向けサービス</v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn block disabled>エディター</v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn block disabled>情報共有ツール</v-btn>
                    </v-col>
                </v-row>
            </p>
            <SearchField />
            <div v-for="(playerType, i) in playerTypes" v-bind:key="i">
                <h2 class="text-center text-bold">{{ playerType.japanese }}</h2>
                <v-row>
                    <v-col md="3" cols="6" v-for="(player, i2) in playerType.Players" v-bind:key="i2">
                        <Language 
                            :name=player.japanese
                            :english=player.english
                            :imgsrc=player.img
                        />
                    </v-col>
                </v-row>
                <v-divider v-if="i < playerTypes.length - 1" class="my-10"></v-divider>
            </div>
        </template>
        <template v-else>
            <Loading />
        </template>
    </v-main>
</template>

<script>
import HowToUse from './components/Home/HowToUse';
import Language from './components/Home/Language';
import Loading from './components/Common/Loading';
import SearchField from './components/Common/SearchField';
import Twitter from './components/Share/Twitter';
import axios from 'axios';

export default {
    components: {
        Language,
        Loading,
        Twitter,
        HowToUse,
        SearchField,
    },
    data () {
        return {
            playerTypes: {},
            siteUrl: '',
        }
    },
    methods: {
        getTypeWithPlayers() {
            axios
                .get(process.env.VUE_APP_API_URL + '/api/v1/player_type/players')
                .then(res => {
                    this.playerTypes = res.data;
                });
        },
    },
    mounted: function () {
        this.getTypeWithPlayers();
        this.siteUrl = process.env.VUE_APP_URL;
    },
}
</script>