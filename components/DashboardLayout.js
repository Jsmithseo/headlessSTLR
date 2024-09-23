import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const DashboardLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row className="flex flex-row">
        {/* Sidebar */}
        <Col
          xs="2"
          className="bg-dark text-white"
          style={{ minHeight: "100vh" }}
        >
          <Nav vertical>
            <NavItem>
              <NavLink href="/dashboard" className="text-white">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard/analytics" className="text-white">
                Analytics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard/settings" className="text-white">
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        {/* Main Content */}
        <Col xs="10">
          <div className="p-4">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;
