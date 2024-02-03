import { render } from '@testing-library/react'

import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Titulo prueba';
  //   const { container } = render(<FirstApp title={title}/>);
  //   expect(container).toMatchSnapshot();
  // })

  test('debe mostrar el titulo en un h1', () => {
    const title = 'Titulo prueba';
    const { getByTestId } = render(<FirstApp title={title}/>);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  })

  test('debe mostrar el subtitulo enviado por props', () => {
    const title = 'Titulo prueba';
    const subTitle = 'Subtitulo prueba';
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    )
    expect(getAllByText(subTitle).length).toBe(1);
  })
})