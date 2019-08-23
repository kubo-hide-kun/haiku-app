<template>
<div>
    <router-link to="/kukai" class="cancel-router">
        <img src="../assets/cancel.png" class="cancel">
    </router-link>
    <button class="touku" @click="touku">
        投句
    </button>
    <textarea class="paper" v-model="haiku"/>
</div>
</template>

<script>
    export default {
        name: "touku",
        data() {
            return {
                haiku: "",
            };
        },
        methods: {
            touku(){
                console.log(this.haiku.split(/\r\n|\r|\n/));
            }
        }
    };
</script>
<style scoped>
    .paper {
        top: 15%;
        left: 50%;
        height: 60%;
        width: 80%;
        transform: translateX(-50%);
        z-index: 60;
        position: absolute;
        padding: 4%;
        background-color: #FFFFFF;
        border: solid 10px #1D5329;
        box-shadow: 5px 2px 0px 0px rgba(0, 0, 0, 0.8);
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 40px;
        font-family: "KouzanBrushFontSousyoOTF", "游明朝体+36ポかな", "游明朝体";
    }
    .touku {
        top: 4%;
        right: 5%;
        position: absolute;
        z-index: 60;
        background: #FFF;/*ボタン色*/
        color: #222;
        border-radius: 3px;
        padding: 4px;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-family: "KouzanBrushFontSousyoOTF", "游明朝体+36ポかな", "游明朝体";
    }
    .cancel-router {
        top: 4%;
        left: 5%;
        position: absolute;
        z-index: 60;
    }
    .cancel {
        width: 15px;
        height: 15px;
    }
</style>
