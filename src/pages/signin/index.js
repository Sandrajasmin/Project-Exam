import React from 'react';
import SignInForm from './component/signinform';
import { Link } from 'react-router-dom';

function SingIn() {
    return (
        <div className="mx-auto max-w-4xl py-20 lg:py-32">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                <div className="flex flex-col text-center ">
                    <h1 className="animate-text bg-gradient-to-r from-lightgreen via-blue to-bluegreen bg-clip-text pb-5 text-center text-5xl font-black text-transparent lg:text-7xl">
                        HOLIDAZE
                    </h1>
                    <div className="py-5">
                        <h2 className="font-heading text-xl font-medium">
                            Sign in to your account
                        </h2>
                        <div className="text-darkgre flex justify-center gap-1 font-body text-sm">
                            <p>or</p>
                            <span className="text-blue">
                                {' '}
                                <Link to="/register">Register a new account</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <SignInForm />
            </div>
        </div>
    );
}

export default SingIn;
