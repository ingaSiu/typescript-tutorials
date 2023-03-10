import { Col, Row } from 'react-bootstrap';

import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

type Props = {};

const Store = (props: Props) => {
  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
