

describe( 'Example Component', () => {
  
  test( 'Debe de ser mayor a 10', () => {

    // Arreglar
    let value = 9;

    // Estímulo
    value = value + 2

    // Observar el estímulo
    expect( value ).toBeGreaterThan(10)

  })

})