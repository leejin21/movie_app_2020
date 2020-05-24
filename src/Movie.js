import React from "react";
import PropTypes from "prop-types";
// fixed: genres가 없는 경우가 있을 수 있음. 그런 경우 undefined를 map하는 거라고 에러가 뜸. 따라서 movie__genres 부분을 아예 주석처리해버림
// if component does not need "state", then 굳이 className component일 필요가 없음. 따라서 function component로.
// FIXED: props는 {}로 function의 인자로 넘김, key는 인자로 넘기는 것이 아니라고 함
function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                {/* <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul> */}
                <p className="movie__summary">{summary.slice(0, 200) + "..."}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
