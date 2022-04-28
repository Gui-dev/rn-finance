import styled from 'styled-components/native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { COLORS, FONTS } from '../../themes'

export const Container = styled(DrawerContentScrollView)`

`

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`

export const Image = styled.Image`
  height: 85px;
  width: 85px;
  resize-mode: contain;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${FONTS.NORMAL};
  color: ${COLORS.WHITE};
  margin-top: 5px;
`

export const Username = styled.Text`
  font-size: 22px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
  margin-bottom: 25px;
`

export const ItemList = styled(DrawerItemList)<typeof DrawerItemList>`

`

export const Item = styled(DrawerItem)<typeof DrawerItem>`

`
