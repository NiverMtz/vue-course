<template>
    <h1>¿Quién es este pokemón?</h1>

    <!-- TODO: img -->
    <PokemonPicture :pokemonId="300" :showPokemon="true"/>

    <!-- TODO: options -->
    <PokemonOptions />

</template>
<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
  }
}
</script>
<style>
    
</style>