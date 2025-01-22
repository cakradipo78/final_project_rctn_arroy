import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { apiGetMoviesNowPlaying, apiGetMoviesSearchMovie } from "../store/action";

export default function NavbarComponent() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");  // State untuk menyimpan query pencarian

    const handleSelect = (e) => {
        console.log(e.target.value, "==> ini pilihan");
        dispatch(apiGetMoviesNowPlaying(e.target.value));
    };

    // Fungsi untuk menangani perubahan input pencarian
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Fungsi untuk menangani pencarian
    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            console.log(searchQuery, "==> ini data untuk search");
            dispatch(apiGetMoviesSearchMovie(searchQuery));  // Mengirim pencarian ke action
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <select onChange={handleSelect} className="form-select" aria-label="Default select example">
                                <option value="now_playing">NOW PLAYING</option>
                                <option value="popular">POPULAR</option>
                                <option value="top_rated">TOP RATED</option>
                            </select>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                        <input
                            value={searchQuery}  // Bind input dengan state
                            onChange={handleSearchChange}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
