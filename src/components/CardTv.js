import england from '../images/england.png'
import japan from '../images/japan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function CardTv(props) {

    return (
        <>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w342${props.popTv.poster_path}`} alt={props.popTv.name} />

                <div className="cont-text">

                    <div className="row title">
                        Title : {props.popTv.name}
                    </div>
                    <div className="row title" v-if="item.name !== item.original_name">
                        Original title : {props.popTv.original_name}
                    </div>

                    {(() => {
                        if (props.popTv.original_language !== `en` && props.popTv.original_language !== `ja`) {
                            return (
                                <div className="row language" >
                                    Language : <img src={`https://countryflagsapi.com/png/${props.popTv.original_language}`}
                                        alt="item.original_language" className="flag"
                                        crossOrigin="anonymous" onError={(e) =>
                                            (e.target.onerror = null)(
                                                (e.target.src =
                                                    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png")
                                            )
                                        } />
                                </div>
                            )
                        } else if (props.popTv.original_language === `en`) {
                            return (
                                <div className="row language" >
                                    Language : <img src={england} alt="en" className="flag" />

                                </div>
                            )
                        } else if (props.popTv.original_language === `ja`) {
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
                            for (let i = 0; i < Math.round(props.popTv.vote_average / 2); i++) {
                                stars1.push(
                                    <FontAwesomeIcon icon={faStar} className="star" />
                                );

                            }

                            return stars1;


                        })()}

                        {(() => {
                            const stars2 = []
                            for (let i = 0; i < (5 - Math.round(props.popTv.vote_average / 2)); i++) {
                                stars2.push(
                                    <FontAwesomeIcon icon={faStar} className="star2" />
                                );

                            }

                            return stars2;


                        })()}



                    </div>
                    <div className="row title" v-if="item.overview !== ``">
                        Overview : {props.popTv.overview}
                    </div>


                </div>
            </div>
        </>
    );
}

export default CardTv;