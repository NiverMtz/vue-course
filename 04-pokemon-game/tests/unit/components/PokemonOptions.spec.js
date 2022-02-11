import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons
            }
        } )
    })

    test('debe hacer match con el snapshot', () => {

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente', () => {

        const list = wrapper.findAll('li')
        expect(list.length).toBe(4)
        expect(
            list[0].text() === pokemons[0].name
            && list[1].text() === pokemons[1].name
            && list[2].text() === pokemons[2].name
            && list[3].text() === pokemons[3].name).toBeTruthy()
    })

    test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selection').length ).toBe(4)
        expect(wrapper.emitted('selection')[0] ).toEqual([5])
        expect(wrapper.emitted('selection')[1] ).toEqual([10])
        expect(wrapper.emitted('selection')[2] ).toEqual([15])
        expect(wrapper.emitted('selection')[3] ).toEqual([20])
    })
})