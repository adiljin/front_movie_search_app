import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { SERVER_IP } from './Network';

export default function Movie() {
    const [movie, setMovie] = useState([])
    const [title, setTitle] = useState({
        nitle: "",
    })

    const { nitle } = title;

    // useEffect(() => {
    //     loadMovies();
    // }, []);

    // const loadMovies = async () => {
    //     let result = null;
    //     result = await axios.get(`http://localhost:8080/movies/${title}`);
    //     setMovie(result.data);
    // };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (e.target.value !== "") {
            let result = null;
            let getTitle = title.nitle.replace(/\s+/g, "+");
            // result = await axios.get(`http://localhost:8080/movies/${getTitle}`);
            result = await axios.get(`http://${SERVER_IP}:3000/movies/${getTitle}`);
            setMovie(result.data);
        }
    }

    const onInputChange = (e) => {
        e.preventDefault();
        setTitle({ ...title, [e.target.name]: e.target.value })
    }

    const save = async (movie) => {
        // await axios.post(`http://localhost:8080/movies`, movie);
        await axios.post(`http://${SERVER_IP}:3000/movies`, movie);
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <form onSubmit={(e) => onSubmit(e)}>

                    <div className='mb-3 text-start'>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter movie's title"
                            name="nitle"
                            value={nitle}
                            onChange={(e) => onInputChange(e)}
                        />
                        <button type='submit' className='btn btn-sm btn-outline-dark float-start'>Search</button>
                        <button className='btn btn-sm btn-outline-dark mx-2 float-start' onClick={() => save(movie)}>Save</button>
                        <Link className='btn btn-sm btn-outline-dark float-end' to={`/history`}>My List</Link>
                    </div>

                </form>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title:</th>
                            <th scope="col">Year:</th>
                            <th scope="col">Rated:</th>
                            <th scope="col">Released:</th>
                            <th scope="col">Runtime:</th>
                            <th scope="col">Genre:</th>
                            <th scope="col">Director:</th>
                            <th scope="col">Writer:</th>
                            <th scope="col">Actors:</th>
                            <th scope="col">Language:</th>
                            <th scope="col">Country:</th>
                            <th scope="col">Awards:</th>
                            <th scope="col">imdbRating:</th>
                            {/* <th scope="col">Test</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movie.map((moviee, index) =>
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    {/* <td>{routee.id}</td> */}
                                    <td>{moviee.Title}</td>
                                    <td>{moviee.Year}</td>
                                    <td>{moviee.Rated}</td>
                                    <td>{moviee.Released}</td>
                                    <td>{moviee.Runtime}</td>
                                    <td>{moviee.Genre}</td>
                                    <td>{moviee.Director}</td>
                                    <td>{moviee.Writer}</td>
                                    <td>{moviee.Actors}</td>
                                    <td>{moviee.Language}</td>
                                    <td>{moviee.Country}</td>
                                    <td>{moviee.Awards}</td>
                                    <td>{moviee.imdbRating}</td>
                                    {/* <td>{moviee.Actors}</td>
                                    <td>{moviee.Rated}</td>
                                    <td>{moviee.Rated}</td> */}

                                    {/* <td>
                                        <Link className='btn btn-outline-success mx-2' to={`/pages/routes/editroute/${routee.id}`}>Edit</Link>
                                        <button className='btn btn-outline-danger mx-2' onClick={() => deleteRoute(routee.id)}>Delete</button>
                                    </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div>
                    {
                        movie.map((moviee, index) =>
                            <img src={moviee.Poster} alt="Description of image" />
                        )
                    }
                </div>

            </div>
        </div>
    )
}
