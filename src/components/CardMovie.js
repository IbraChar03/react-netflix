
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
                    <div className="row language" v-if="item.original_language !== `en` && item.original_language !== `ja`">
                        Language : <img src={`https://countryflagsapi.com/png/${props.popMovie.original_language}`}
                            alt="item.original_language" className="flag" onerror="this.src='/images/missing.png';"
                            crossorigin="anonymous" />
                    </div>
                    {/* <div className="row language" v-else-if="item.original_language == `en`">
                        Language : <img src="/images/england.png" alt="en" className="flag" />
                    </div>
                    <div className="row language" v-else-if="item.original_language == `ja`">
                        Language: <img src="/images/japan.png" alt="ja" className="flag" />
                    </div> */}

                    {/* <div className="row vote">

                        Vote : <font-awesome-icon icon="fa-solid fa-star " className="star"
                            v-for="item in Math.round(item.vote_average / 2)" />
                        <font-awesome-icon icon="fa-solid fa-star " className="star2"
                            v-for="item in 5 - (Math.round(item.vote_average / 2))" />

                    </div> */}
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
