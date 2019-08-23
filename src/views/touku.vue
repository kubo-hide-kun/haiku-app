<template>
<div>
    <button class="touku" @click="touku">
        <img src="../assets/toukou.png" class="toukou">
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
                console.log(this.haiku);
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
        top: 6%;
        right: 10%;
        position: absolute;
        z-index: 60;
    }
    .toukou{
        width:30px;                            
        height:30px;
    }
</style>
