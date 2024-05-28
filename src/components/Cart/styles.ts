import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import close from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${cores.cinza};
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;

  ${ButtonContainer} {
    width: 100%;
    max-width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;
  margin-top: 16px;

  span {
    display: block;
    font-size: 12px;
  }
`
export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-top: 32px;
`
export const CartItem = styled.li`
  display: flex;
  gap: 16px;
  border-bottom: 1px solid ${cores.branca};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  ${TagContainer} {
    margin: 8px 8px 8px 0;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
