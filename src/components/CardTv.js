function CardTv(props) {

    return (
        <>
            <div class="card">
                <img src={`https://image.tmdb.org/t/p/w342${props.popTv.poster_path}`} alt={props.popTv.name} />

                <div class="cont-text">

                    <div class="row title">
                        Title : {props.popTv.name}
                    </div>
                    <div class="row title" v-if="item.name !== item.original_name">
                        Original title : {props.popTv.original_name}
                    </div>
                    <div class="row language" v-if="item.original_language !== `en` && item.original_language !== `ja`">
                        Language : <img src={`https://countryflagsapi.com/png/${props.popTv.original_language}`}
                            alt="item.original_language" class="flag"
                            crossorigin="anonymous" />
                    </div>
                    {/* <div class="row language" v-else-if="item.original_language == `en`">
                Language : <img src="/images/england.png" alt="en" class="flag" />
            </div>
            <div class="row language" v-else-if="item.original_language == `ja`">
                Language: <img src="/images/japan.png" alt="ja" class="flag" />
            </div> */}
                    {/* 
            <div class="row vote">

                Vote : <font-awesome-icon icon="fa-solid fa-star " class="star"
                    v-for="item in Math.round(item.vote_average / 2)" />
                <font-awesome-icon icon="fa-solid fa-star " class="star2"
                    v-for="item in 5 - (Math.round(item.vote_average / 2))" />

            </div> */}
                    <div class="row title" v-if="item.overview !== ``">
                        Overview : {props.popTv.overview}
                    </div>

                    {/* <div class="cast title" >
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