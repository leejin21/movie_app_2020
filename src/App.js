import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// FIXED: Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like className and htmlFor, respectively.

class App extends React.Component {
    state = {
        // 미래에 추가할 state를 모두 처음에 declare할 필요는 없음.
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        // async 알아보기
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        // setTimeout(() => {
        //     // setTimeout의 인자1: function, 인자2: 시간(ms 기준)
        //     this.setState({ isLoading: false });
        // }, 3000);
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        // const { toy } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading....</span>
                    </div>
                ) : (
                    <div className="movies">
                        {/* <h1 className="document__head">Movies list</h1> */}
                        {movies.map((movie) => {
                            console.log(movie);
                            return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}></Movie>;
                        })}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
