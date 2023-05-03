import RegisterForm from './components/registerUser';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="mx-auto mb-10 max-w-7xl py-10">
            <div className="text flex flex-col justify-evenly gap-5 md:items-center lg:flex-row lg:px-5">
                <div className="text-center">
                    <h1 className="animate-text bg-gradient-to-r from-lightgreen via-blue to-bluegreen bg-clip-text pb-5 text-center text-5xl font-black text-transparent lg:text-7xl">
                        HOLIDAZE
                    </h1>
                    <h2 className="font-heading text-xl">Create a new account</h2>
                    <div className="text-darkgre flex justify-center gap-1 font-body text-sm">
                        <p>or</p>
                        <span className="text-blue">
                            {' '}
                            <Link to="/log-in">Sign in to your account</Link>
                        </span>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
