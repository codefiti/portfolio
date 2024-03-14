import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs';
import './App.css'

function App() {

    const [toggled, setToggled] = useState(false);
    const [toggledOpacity, setToggledOpacity] = useState(false);
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const words = ['Inspire', 'Educate', 'Elevate'].map(word => word.split(''));
    let [currentWordIndex, setCurrentWordIndex] = useState(0);
    let [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [currentSpaces, setCurrentSpaces] = useState(0);
    const directionRef = useRef(true); // Using ref to keep track of direction between renders
    const customCursorRef = useRef(null); // Reference to the custom cursor

    // Dynamic title animation
    useEffect(() => {
        const intervalId = setInterval(() => {
            let spaces = "_".repeat(currentSpaces);
            document.title = `FutureSpace${spaces}🚀`;
            setCurrentSpaces(current => {
                let newSpaces;
                if (directionRef.current) {
                    newSpaces = current >= 10 ? 10 : current + 1;
                    if (newSpaces === 10) directionRef.current = false;
                } else {
                    newSpaces = current <= 0 ? 0 : current - 1;
                    if (newSpaces === 0) directionRef.current = true;
                }
                return newSpaces;
            });
        }, 500);

        return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);

    // Custom cursor movement
    useEffect(() => {
        const moveCursor = (e) => {
            if (customCursorRef.current) {
                customCursorRef.current.style.left = `${e.clientX}px`;
                customCursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        document.addEventListener('mousemove', moveCursor);

        return () => document.removeEventListener('mousemove', moveCursor);
    }, []);

    // Handle mouse enter and leave for cards
    const handleMouseEnter = () => {
        if (customCursorRef.current) {
            customCursorRef.current.style.transform = 'scale(4)';
            customCursorRef.current.style.backdropFilter = 'blur(5px)';
            customCursorRef.current.style.opacity = '0.1';
        }
    };

    const handleMouseLeave = () => {
        if (customCursorRef.current) {
            customCursorRef.current.style.transform = 'scale(1)';
            customCursorRef.current.style.backdropFilter = 'blur(0px)';
            customCursorRef.current.style.opacity = '1';
        }
    };


    const toggle = () => {
        setToggled(!toggled);
    };

    const toggleOpacity = () => {
        setToggledOpacity(!toggledOpacity);
    };

    const handleOnClick = (index) => {
        toggle();
        toggleOpacity();
        // Handle animation
        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, { grid: [columns, rows], from: index })
        });
    };

    useEffect(() => {
        // Similar to window.onload
        const setupGrid = () => {
            // Calculate columns, rows, and set initial state
            const updateDimensions = () => {
                const size = window.innerWidth > 800 ? 100 : 50;
                setColumns(Math.floor(window.innerWidth / size));
                setRows(Math.floor(window.innerHeight / size));
            };
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
            return () => window.removeEventListener('resize', updateDimensions);
        };

        setupGrid();
    }, []);

    const createTiles = () => {
        let tiles = [];
        for (let i = 0; i < columns * rows; i++) {
            tiles.push(
                <div className={`tile animated`} // Add 'animated' class based on toggled state
                     style={{ opacity: toggled ? 0 : 1 }}
                     onClick={() => handleOnClick(i)}
                     key={i}>
                </div>
            );
        }
        return tiles;
    };


    return (
        <>
            <div id="page-wrapper">
                <div className="absolute-bottom-center scroll">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                    <div className=" -mt-2 sm:mt-0 text-rgba text-xs font-semibold">
                        Scroll Down
                    </div>
                </div>
                <div id="tiles">
                    {createTiles()}
                </div>

                <div id="title" className="centered flex-col-aligned">

        <span className="mt">
            FutureSpace
        </span>
                </div>

                <i id="icon">
                    <img className="rocket" src="" alt="" srcSet="./resources/FsOutline.png"/>
                </i>
                <p id="description" className="fancy centered">
                </p>
            </div>
            <div className="container services-body">
                <h2 className="center">What we do best</h2>
                <section className="team">
                    <div className="grid">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="icon">
                    <i className="fa fa-lightbulb-o"></i>
                </span>
                            <h4>Digital Innovation</h4>
                            <p>
                                Pioneering digital solutions tailored to modern challenges, utilizing cutting-edge
                                technology and
                                creative problem-solving approaches.
                            </p>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                    <div className="tile tile-11"></div>
                                    <div className="tile tile-12"></div>

                                    <div className="tile tile-13"></div>
                                    <div className="tile tile-14"></div>
                                    <div className="tile tile-15"></div>
                                    <div className="tile tile-16"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="icon">
                    <i className="fa fa-cogs"></i>
                </span>
                            <h4>Automation & Efficiency</h4>
                            <p>
                                Streamlining operations with advanced automation tools, enhancing productivity and
                                operational
                                efficiency for businesses.
                            </p>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                    <div className="tile tile-11"></div>
                                    <div className="tile tile-12"></div>

                                    <div className="tile tile-13"></div>
                                    <div className="tile tile-14"></div>
                                    <div className="tile tile-15"></div>
                                    <div className="tile tile-16"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="icon">
                    <i className="fa fa-shield"></i>
                </span>
                            <h4>Cyber-security Consultancy</h4>
                            <p>
                                Providing expert cyber security guidance and solutions to protect digital assets and
                                ensure data
                                integrity.
                            </p>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                    <div className="tile tile-11"></div>
                                    <div className="tile tile-12"></div>

                                    <div className="tile tile-13"></div>
                                    <div className="tile tile-14"></div>
                                    <div className="tile tile-15"></div>
                                    <div className="tile tile-16"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="icon">
                    <i className="fa fa-bullhorn"></i>
                </span>
                            <h4>Digital Marketing Strategies</h4>
                            <p>
                                Crafting bespoke digital marketing plans to boost online presence, engage audiences, and
                                drive
                                business growth.
                            </p>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                    <div className="tile tile-11"></div>
                                    <div className="tile tile-12"></div>

                                    <div className="tile tile-13"></div>
                                    <div className="tile tile-14"></div>
                                    <div className="tile tile-15"></div>
                                    <div className="tile tile-16"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="icon">
                    <i className="fa fa-globe"></i>
                </span>
                            <h4>Web Development & Analytics</h4>
                            <p>
                                Building dynamic, user-friendly websites integrated with analytics tools for insightful
                                data-driven
                                decisions.
                            </p>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                    <div className="tile tile-11"></div>
                                    <div className="tile tile-12"></div>

                                    <div className="tile tile-13"></div>
                                    <div className="tile tile-14"></div>
                                    <div className="tile tile-15"></div>
                                    <div className="tile tile-16"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="icon">
                    <i className="fa fa-code"></i>
                </span>
                            <h4>Software Development</h4>
                            <p>
                                Designing and developing high-quality software solutions tailored to meet specific
                                business needs
                                and objectives.
                            </p>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                    <div className="tile tile-11"></div>
                                    <div className="tile tile-12"></div>

                                    <div className="tile tile-13"></div>
                                    <div className="tile tile-14"></div>
                                    <div className="tile tile-15"></div>
                                    <div className="tile tile-16"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div ref={customCursorRef} id="customCursor"></div>

            <div className="container profile-container about">
                <h2 className="center meet-us">Meet Our Team</h2>
                <section className="team">
                    <div className="grid2">


                        <article className="profile card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="profile-image">
                                <img src="./resources/images/ken.jpg" alt=""/>
                            </div>
                            <h2 className="profile-username">Steve Tom</h2>
                            <small className="profile-user-handle">@Raccoon254</small>
                            <div className="profile-links">
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </article>

                        <article className="profile card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="profile-image">
                                <img src="./resources/images/jimmy.jpg" alt=""/>
                            </div>
                            <h2 className="profile-username">Jimmy Kimunyi</h2>
                            <small className="profile-user-handle">@Jkimunyi-dev</small>
                            <div className="profile-links">
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </article>
                        <article className="profile card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="profile-image">
                                <img src="./resources/images/nim.jpg" alt=""/>
                            </div>
                            <h2 className="profile-username">Nimrod Walwe</h2>
                            <small className="profile-user-handle">@Panther-12</small>
                            <div className="profile-links">
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </article>
                        <article className="profile card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="profile-image">
                                <img src="./resources/images/sherry.jpg" alt=""/>
                            </div>
                            <h2 className="profile-username">Sherry Obare</h2>
                            <small className="profile-user-handle">@SherryObare</small>
                            <div className="profile-links">
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </article>

                        <article className="profile card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="profile-image">
                                <img src="./resources/images/kingb2.jpg" alt=""/>
                            </div>
                            <h2 className="profile-username">Brian Kingara</h2>
                            <small className="profile-user-handle">@kingaranjoroge</small>
                            <div className="profile-links">
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </article>
                        <article className="profile card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="profile-image">
                                <img src="./resources/images/purity.jpg" alt=""/>
                            </div>
                            <h2 className="profile-username">Purity Benjamin</h2>
                            <small className="profile-user-handle">@PurityBenjamin</small>
                            <div className="profile-links">
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="link link--icon">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </article>

                    </div>
                </section>
            </div>


            <div className="container profile-container about">
                <h2 className="center meet-us">Talk with real people</h2>
                <section className="team">


                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11284.73497262104!2d37.663075546117476!3d-0.319439331865692!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1701380740231!5m2!1sen!2ske"
                            height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div className="grid">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="images">
                    <img src="./resources/images/ken.jpg" alt="Image 1" className="image1"/>
                    <img src="./resources/images/nim.jpg" alt="Image 2" className="image2"/>
                </span>
                            <h4 className="mb"> Tech Support</h4>

                            <p className="mt">
                                We are here to help you with any technical issues you may have. We are available 24/7.
                            </p>

                            <div className="contact">
                                <div className="contact-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <table className="contact-table">
                                        <tbody>

                                        <tr>
                                            <td>+254 740 837 666</td>
                                            <td>Nimrod W</td>
                                        </tr>
                                        <tr>
                                            <td>+254 758 481 320</td>
                                            <td>Steve T</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>

                            </div>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="images">
                    <img src="./resources/images/jimmy.jpg" alt="Image 1" className="image1"/>
                    <img src="./resources/images/sherry.jpg" alt="Image 2" className="image2"/>
                </span>
                            <h4 className="mb"> Tech Support</h4>

                            <p className="mt">
                                We are here to help you with any technical issues you may have. We are available 24/7.
                            </p>

                            <div className="contact">
                                <div className="contact-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <table className="contact-table">
                                        <tbody>

                                        <tr>
                                            <td>+254 742 255 273</td>
                                            <td>Sherrie O</td>
                                        </tr>
                                        <tr>
                                            <td>+254 113 514 156</td>
                                            <td>Jimmy K</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>

                            </div>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
                <span className="images">
                    <img src="./resources/images/kingb2.jpg" alt="Image 1" className="image1"/>
                    <img src="./resources/images/purity.jpg" alt="Image 2" className="image2"/>
                </span>
                            <h4 className="mb"> Tech Support</h4>

                            <p className="mt">
                                We are here to help you with any technical issues you may have. We are available 24/7.
                            </p>

                            <div className="contact">
                                <div className="contact-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <table className="contact-table">
                                        <tbody>

                                        <tr>
                                            <td>+254 738 200 416</td>
                                            <td>Purity B</td>
                                        </tr>
                                        <tr>
                                            <td>+254 703 371 828</td>
                                            <td>Brian K</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>

                            </div>
                            <div className="shine"></div>
                            <div className="background">
                                <div className="tiles">
                                    <div className="tile tile-1"></div>
                                    <div className="tile tile-2"></div>
                                    <div className="tile tile-3"></div>
                                    <div className="tile tile-4"></div>

                                    <div className="tile tile-5"></div>
                                    <div className="tile tile-6"></div>
                                    <div className="tile tile-7"></div>
                                    <div className="tile tile-8"></div>

                                    <div className="tile tile-9"></div>
                                    <div className="tile tile-10"></div>
                                </div>
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="line line-5"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default App
