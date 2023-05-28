import './App.css';
import Router from './routes/router';
import { useSelector } from 'react-redux';
import Loader from './components/loader';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
    const { isLoading } = useSelector((state) => state.loader);

    return (
        <>
            <Header />
            <Router />
            {isLoading && <Loader />}
            <Footer />
        </>
    );
}

export default App;
