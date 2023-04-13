import { Column } from '~components/ui/Column'
import { Row } from '~components/ui/Row'
import { Text } from '~components/ui/Text'

export const HomeScreen: React.FC = () => {
  return (
    <Column>
      <Row>
        <Text text="top" />
      </Row>
      <Row>
        <Text text="header" />
      </Row>
      <Row className="bg-backgroundPrimary">
        <Text text="categories row wrap" />
      </Row>
      <Row className="bg-backgroundPrimary">
        <Text text="bottom" />
      </Row>
    </Column>
  )
}
