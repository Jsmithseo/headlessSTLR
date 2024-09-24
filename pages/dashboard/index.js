// pages/dashboard/index.js
import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard Overview</h1>
      <Row class="flex flex-row">
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Total Sales</CardTitle>
              <CardText>$50,000</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">New Users</CardTitle>
              <CardText>120</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Orders</CardTitle>
              <CardText>200</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default Dashboard;
