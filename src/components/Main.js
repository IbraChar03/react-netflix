import { useEffect, useState } from "react";
import CardMovie from './CardMovie.js'
import CardTv from './CardTv.js'
import axios from 'axios'
function Main() {

    const [popMovies, setpopMovies] = useState([])
    const [popTvs, setpopTvs] = useState([])
    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4881642f8f2f202c4e6283bd227db882&page=1")
            .then((res) => setpopMovies(res.data.results)

            )
    })
    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=4881642f8f2f202c4e6283bd227db882&page=1")
            .then((res) => setpopTvs(res.data.results)

            )
    })

    return (
        <>
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
