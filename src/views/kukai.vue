<template>
    <div class="kukai">
        <center>
            <section class="tategaki">たてがき</section>
        </center>

        <!--<button class="fab" type="submit" @click="onsubmit"><img src="../assets/hude.png" width="60" height="60"></button>-->

    </div>
</template>

<script>
    export default {
        name: 'kukai',
    }
</script>
<style scoped>
    .kukai {
        top: 15%;
        left: 50%;
        height: 60%;
        transform: translateX(-50%);
        z-index: 60;
        position: absolute;
        background-color: #FFFFFF;
        border: solid 10px #1D5329;
        box-shadow: 5px 2px 0px 0px rgba(0, 0, 0, 0.8);
    }

    .fab {
        position: fixed;
        right: -100px;
        bottom: -70px;
        transition: all 0.1s ease-in-out;
    }

    .fab:hover {
        box-shadow: 0 6px 14px 0 #666;
        transform: scale(1.05);
    }

    .tategaki {
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 40px;
        font-family: "KouzanBrushFontSousyoOTF", "游明朝体+36ポかな", "游明朝体";
    }
</style>
