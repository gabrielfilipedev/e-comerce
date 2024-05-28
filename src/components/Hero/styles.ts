import styled from 'styled-components'
import { cores } from '../../styles'
import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  height: 480px;
  width: 100%;
  display: block;
  position: relative;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.73);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
