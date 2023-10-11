const Navbar = () => {

    return(
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <a className="text-2xl font-semibold text-white" href="/">
                    <img src="codefiti.png" alt="logo" className="w-8 h-8" />
                </a>
            </div>
            <div className="navbar-center">

            </div>
            <div className="navbar-end">
                <div className="flex text-white gap-5">
                    <a className="" href="/">Home</a>
                    <a className="" href="/projects">Projects</a>
                    <a className="" href="/contacts">Contacts</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;