
import logo from '../images/netflix.png'
import profile from '../images/profilepicture.png'
function Header() {
    let links = [
        {
            name: "Home",
            href: '#'
        },
        {
            name: "Series",
            href: '#'
        },
        {
            name: "Films",
            href: '#'
        },
        {
            name: "Recently Added",
            href: '#'
        },
        {
            name: "My List",
            href: '#'
        },
    ]
    return (
        <>
            <section className="header">
                <div className="cont">
                    <div className="links">
                        <img src={logo} alt="netflix" />
                        <ul>

                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="search">
                        <div className="inp">
                            <input type="text" />
                            <button>

                            </button>
                        </div>


                        <div className="profile">
                            <img src={profile} alt="" className="imgprofile" />


                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Header;
