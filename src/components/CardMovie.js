import england from '../images/england.png'
import japan from '../images/japan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function CardMovie(props) {

    return (
        <>
            <div className="card" >
                <img src={`https://image.tmdb.org/t/p/w342${props.popMovie.poster_path}`} alt="item.title" />

                <div className="cont-text">

                    <div className="row title">
                        Title : {props.popMovie.title}
                    </div>
                    <div className="row title" v-if="item.title !== item.original_title">
                        Original title : {props.popMovie.original_title}
                    </div>
                    {(() => {
                        if (props.popMovie.original_language !== `en` && props.popMovie.original_language !== `ja`) {
                            return (
                                <div className="row language" >
                                    Language : <img src={`https://countryflagsapi.com/png/${props.popMovie.original_language}`}
                                        alt="item.original_language" className="flag"
                                        crossOrigin="anonymous" onError={(e) =>
                                            (e.target.onerror = null)(
                                                (e.target.src =
                                                    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png")
                                            )
                                        } />
                                </div>
                            )
                        } else if (props.popMovie.original_language === `en`) {
                            return (
                                <div className="row language" >
                                    Language : <img src={england} alt="en" className="flag" />
                                </div>
                            )
                        } else if (props.popMovie.original_language === `ja`) {
                            return (
                                <div className="row language">
                                    Language: <img src={japan} alt="ja" className="flag" />
                                </div>
                            )
                        }
                    })()}

                    <div className="row vote">
                        Vote :

                        {(() => {
                            const stars1 = []
                            for (let i = 0; i < Math.round(props.popMovie.vote_average / 2); i++) {
                                stars1.push(
                                    <FontAwesomeIcon icon={faStar} className="star" />
                                );

                            }

                            return stars1;


                        })()}

                        {(() => {
                            const stars2 = []
                            for (let i = 0; i < (5 - Math.round(props.popMovie.vote_average / 2)); i++) {
                                stars2.push(
                                    <FontAwesomeIcon icon={faStar} className="star2" />
                                );

                            }

                            return stars2;


                        })()}



                    </div>
                    <div className="row title" v-if="item.overview !== ``">
                        Overview : {props.popMovie.overview}
                    </div>
                    {/* <div className="cast title" @click="getMovieCast()">
                Click here for the cast
                <div v-for="item in store.arrayMovieCast">
                    {{ item }}

                </div>



            </div> */}

                </div>

            </div>
        </>
    );
}

export default CardMovie;
