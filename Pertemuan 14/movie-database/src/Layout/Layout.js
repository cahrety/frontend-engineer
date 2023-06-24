import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../Container/Container";

function Layout({ children }) {
    return(
        <div>
            <Navbar />
            <main>
                <Container>
                    {children}
                </Container>
                </main>
            <Footer />
        </div>
    );
}

export default Layout;