import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10AC84'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCss = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;

    .container{
      max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
    }
  }

  body{
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }
`

export default GlobalCss
