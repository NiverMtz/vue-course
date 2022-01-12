import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    // test('debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto', () => {

        const wrapper = shallowMount( Counter )

        expect(wrapper.exists('h2')).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')

    })

})