import styled from 'styled-components/native'
import { Picker } from '@react-native-picker/picker'

import { COLORS } from '../../themes'

export const Container = styled(Picker).attrs({
  dropdownIconColor: COLORS.SECONDARY
})`
  color: ${COLORS.WHITE};
  height: 45px;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, .20);
  border-radius: 8px;
`

export const PickerItem = styled(Picker.Item)`
`
