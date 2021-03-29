import { routes } from "App/routes";
import NavButton from "components/ui/buttons/NavButton";
import './layout.scss';

const Layout = ({ children, location }) => {
    const navigationData = Object.entries(routes).filter(item => item[1] !== location.pathname);
    return (
        <>
            <header className="header">
                <h1>Currency informer</h1>
                <nav>
                    {navigationData.map(button => <NavButton key={button[1]} route={button[1]}>{button[0]}</NavButton>)}
                </nav>
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <h6>test task</h6>
            </footer>
        </>
    );
};

export default Layout;
