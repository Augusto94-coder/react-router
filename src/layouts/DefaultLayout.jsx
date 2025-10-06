import { Outlet } from "react-router-dom";
import MainNavBar from "../components/MainNavBar.jsx";

export default function DefaultLayout() {
    return (
        <>
            <header className="app-header">
                <MainNavBar />
            </header>
            <main className="app-main"> 
                <Outlet />
            </main>
            <footer className="app-footer">© ADL E-commerce</footer>
        </>
    );
}