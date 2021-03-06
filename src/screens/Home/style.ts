import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'

import { DataProps } from './'
import { COLORS, FONTS } from '../../themes'

export const Container = styled.View`
  flex: 1;
`

export const UserInfo = styled.View`
  padding: 20px;
  margin-top: 80px;
`

export const Name = styled.Text`
  font-size: 19px;
  font-family: ${FONTS.NORMAL};
  color: ${COLORS.WHITE};
`

export const Balance = styled.Text`
  font-size: 30px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
  margin-top: 5px;
`

export const Content = styled.View`
  flex: 1;
  padding: 0 20px;
  width: 100%;
`

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.SECONDARY};
  margin-left: 5px;
`

export const ListMoves = styled(FlatList as new (props: FlatListProps<DataProps>) => FlatList<DataProps>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 15,
    paddingBottom: 60,
    marginTop: 20,
    backgroundColor: COLORS.BLACK60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
})`

`
