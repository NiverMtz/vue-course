<template>
    <h1>¿Quién es este pokemón?</h1>

    <!-- TODO: img -->
    <PokemonPicture :pokemonId="300" :showPokemon="true"/>

    <!-- TODO: options -->
    <PokemonOptions :pokemons="pokemonArr" />

</template>
<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log( getPokemonOptions() )

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
  },
  data() {
      return {
          pokemonArr: []
      }
  },
  methods: {
      async mixPokemonArray() {
          this.pokemonArr = await getPokemonOptions()
      }
  },
  mounted() {
      this.mixPokemonArray()
  }
}
</script>
<style>
    
</style>