import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function History() {
    const [movie, setMovie] = useState([])
    const [title, setTitle] = useState({
        nitle: "",
    })

    const { nitle } = title;

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        let result = null;
        result = await axios.get(`http://localhost:8080/movies`);
        setMovie(result.data);
    };

    return (
        <div className='container'>
            <Link className='btn btn-outline-success mx-2' to={`/`}>Back</Link>
            <div className='py-4'>
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
                            <th scope="col">Poster:</th>
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
                                    <td><img src={moviee.Poster} alt="Description of image" style={{ width: '100px', height: '100pxpx' }} /></td>
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
            </div>
        </div>
    )
}
