import { Text } from 'react-native'

import Column from '~components/ui/Column'
import Row from '~components/ui/Row'

export const HomeScreen: React.FC = () => {
  return (
    <Row>
      <Column className="flex-1">
        <Row>
          <Text>Top</Text>
        </Row>
        <Row>
          <Text>Header</Text>
        </Row>
        <Row>
          <Text>categories wrap</Text>
        </Row>
      </Column>
      <Row>
        <Text>Bottom</Text>
      </Row>
    </Row>
  )
}
