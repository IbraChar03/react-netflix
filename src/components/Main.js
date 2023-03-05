import { useEffect, useState } from "react";
import CardMovie from './CardMovie.js'
import CardTv from './CardTv.js'
import axios from 'axios'
import logo from '../images/netflix.png'
import profile from '../images/profilepicture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
function Main() {
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
    const [query, setQuery] = useState("")
    const [popMovies, setpopMovies] = useState([])
    const [popTvs, setpopTvs] = useState([])
    function getMovie() {



        let api = "https://api.themoviedb.org/3/movie/popular?api_key=4881642f8f2f202c4e6283bd227db882&page=1"
        if (query !== "") {
            api = "https://api.themoviedb.org/3/search/movie?api_key=4881642f8f2f202c4e6283bd227db882&query=" + query
        }

        axios.get(api)
            .then((res) => setpopMovies(res.data.results)

            )

    }
    function getTv() {
        let api = "https://api.themoviedb.org/3/tv/popular?api_key=4881642f8f2f202c4e6283bd227db882&page=1"
        if (query !== "") {
            api = "https://api.themoviedb.org/3/search/tv?api_key=4881642f8f2f202c4e6283bd227db882&query=" + query
        }
        axios.get(api)
            .then((res) => setpopTvs(res.data.results)

            )

    }
    function getData() {
        getTv();
        getMovie();
    }
    useEffect(() => {
        getData()
    }, []);

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
                            <input type="text" onChange={(e) => setQuery(e.target.value)} />
                            {/* <input type="button"  /> */}
                            <button>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" onClick={() => getData()} />
                            </button>

                        </div>

                        <FontAwesomeIcon icon={faBell} className="bell" />
                        <div className="profile">
                            <img src={profile} alt="" className="imgprofile" />
                            <FontAwesomeIcon icon={faSortDown} className="angle" />

                        </div>
                    </div>

                </div>
            </section>
            <section className="mainpart">
                <section className="main">

                    {/* <div className="noresults" v-if="store.arrayCardsTv.length == 0 && store.arrayCardsMovie.length == 0">
                        <p>No Results Found! Try Again</p>
                    </div> */}

                    <div className="container">

                        <div className="text" v-if="store.showDiv">
                            <p>POPULAR MOVIES</p>
                        </div>

                        {/* <div className="text" v-if="!store.arrayCardsMovie.length == 0 && !store.showDiv">
                            <p>MOVIES</p>
                        </div> */}

                        <div className="cont-cards">
                            {popMovies.map((popMovie, index) => (
                                <CardMovie key={index} popMovie={popMovie} />
                            ))}

                        </div>


                        <div className="text" v-if="store.showDiv">
                            <p>POPULAR TV SERIES</p>
                        </div>

                        {/* <div className="text" v-if="!store.arrayCardsTv.length == 0 && !store.showDiv">
                            <p>TV SERIES</p>
                        </div> */}

                        <div className="cont-cards">
                            {popTvs.map((popTv, index) => (
                                <CardTv popTv={popTv} key={index} />
                            ))}

                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Main;
