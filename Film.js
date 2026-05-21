import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Film() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/filmek/${id}`)
            .then(res => res.json())
            .then(data => setFilm(data[0]));
    }, [id]);

    if (!film) return <p>Betöltés...</p>;

    return(
        <div>
            <h1>{film.cim}</h1>
            <p>Rendező: {film.rendezo}</p>
            <p>Év: {film.ev}</p>
            <p>Műfaj: {film.mufaj}</p>
        </div>
    );

}
export default Film;