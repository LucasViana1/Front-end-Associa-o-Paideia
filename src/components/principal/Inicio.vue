<template>
  <b-container class="mt-4">
    <b-row align-h="center">
      <b-col cols="12" sm="11" align-v='center'>
        <b-carousel
        id="slides"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#ababab"
        img-width="960"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
          <b-carousel-slide :img-src="img1"></b-carousel-slide>
          <b-carousel-slide :img-src="img2"></b-carousel-slide>
          <b-carousel-slide :img-src="img3"></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    
    
    <Documentos/>
    <Depoimentos/>
  </b-container>

</template>

<script>
import Documentos from '@/components/principal/Documentos.vue'
import Depoimentos from '@/components/principal/Depoimentos.vue'

  export default {
    name: 'Inicio',
    components: {
      Documentos,
      Depoimentos
    },
    data() {
      return {
        slide: 0,
        sliding: null,
        img1: require('@/assets/slides/image_01.png'),
        img2: require('@/assets/slides/image_02.png'),
        img3: require('@/assets/slides/image_03.png')
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped></style>
<!--
  interval: intervalo de tempo entre cada slide
  controls: botoes proximo e anterior slide
  indicators: botoes seleciona uma img
-->