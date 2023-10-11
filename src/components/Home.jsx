import React, { useState, useEffect } from 'react';

const Home = () => {
    const [role, setRole] = useState('developers');
    const roles = ['developers', 'engineers', 'designers', 'innovators', 'creators'];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = index + 1 < roles.length ? index + 1 : 0;
            setRole(roles[index]);
        }, 2000); // change every 2 seconds

        return () => clearInterval(interval); // clear interval on unmount
    }, []);

    return (
        <div>
            <section className="hero min-h-screen bg-base-200">
                <div className="text-center hero-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Hello there
                        </h1>
                        <p className="mb-5">
                            We are codefiti, we are {role}.
                        </p>
                        <button className="btn btn-primary btn-outline ring ring-inset ring-white">Get Started</button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
