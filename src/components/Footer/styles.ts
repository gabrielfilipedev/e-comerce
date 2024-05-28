import styled from 'styled-components'
import { cores } from '../../styles'

import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  margin-top: 40px;
`
export const Title = styled.h4`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: #a3a3a3;
  text-decoration: none;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
