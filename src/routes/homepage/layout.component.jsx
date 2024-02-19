import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Footer from '../../components/footer/footer.component';
import Header from "../../components/header/header.component";

function Layout() {
  
  return (
    <Container fluid="true">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </Container>
  );
}

export default Layout;