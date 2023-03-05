import england from '../images/england.png'
import japan from '../images/japan.png'
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
                                        crossOrigin="anonymous" />
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

                    {/* <div className="row language" v-else-if="item.original_language == `en`">
                Language : <img src="/images/england.png" alt="en" className="flag" />
            </div>
            <div className="row language" v-else-if="item.original_language == `ja`">
                Language: <img src="/images/japan.png" alt="ja" className="flag" />
            </div> */}
                    {/* 
            <div className="row vote">

                Vote : <font-awesome-icon icon="fa-solid fa-star " className="star"
                    v-for="item in Math.round(item.vote_average / 2)" />
                <font-awesome-icon icon="fa-solid fa-star " className="star2"
                    v-for="item in 5 - (Math.round(item.vote_average / 2))" />

            </div> */}
                    <div className="row title" v-if="item.overview !== ``">
                        Overview : {props.popTv.overview}
                    </div>

                    {/* <div className="cast title" >
                Click here for the cast
                <div v-for="item in store.arrayTvCast">
                    {{ item }}
                </div>

            </div> */}

                </div>
            </div>
        </>
    );
}

export default CardTv;