import { useState, useEffect } from 'react';

const Home = () => {
    const [role, setRole] = useState('developers');
    const roles = ['developers', 'engineers', 'designers', 'innovators', 'creators'];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = index + 1 < roles.length ? index + 1 : 0;
            setRole(roles[index]);
        }, 3000);

        return () => clearInterval(interval); // clear interval on unmount
    }, []);

    return (
        <div>
            <section className="hero h-full bg-base-200">
                <div className="backdrop-blur-sm min-h-screen w-full flex justify-start items-center">
                    <div className="max-w-lg m-4">
                        <h1 className="mb-5 text-neutral bg-blend-difference text-5xl font-semibold">
                            Hello there
                        </h1>
                        <p className="mb-5 text-3xl">
                            We are codefiti, we are <span className={'text-primary'}>
                            {role}
                        </span>
                            .
                        </p>
                        <button className="btn btn-primary btn-outline ring ring-inset ring-white">Get Started</button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
