import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Filmek() {
    const [filmek, setFilmek] = useState([]);
    const navigate = useNavigate();

    const torles = (id) => {
        fetch(`http://localhost:5000/api/filmek/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => {
                setFilmek(filmek.filter(f => f.id !== id));
            });
    };

    useEffect(() => {
        fetch("http://localhost:5000/api/filmek")
            .then(res => res.json())
            .then(data => setFilmek(data))
            .catch(err => console.log(err));
    }, []);

   return (
  <div>

    <h1>Filmek</h1>

    <button onClick={() => navigate("/uj")}>
      + Új film
    </button>

    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Cím</th>
          <th>Rendező</th>
          <th>Év</th>
          <th>Műfaj</th>
          <th>Műveletek</th>
        </tr>
      </thead>

      <tbody>
        {filmek.map(film => (
          <tr key={film.id}>

            <td>{film.cim}</td>
            <td>{film.rendezo}</td>
            <td>{film.ev}</td>
            <td>{film.mufaj}</td>

            <td>

              <button onClick={() => navigate(`/filmek/${film.id}`)}>
                Részletek
              </button>

              <button onClick={() => navigate(`/filmek/edit/${film.id}`)}>
                Szerkesztés
              </button>

              <button onClick={() => torles(film.id)}>
                Törlés
              </button>

            </td>

          </tr>
        ))}
      </tbody>
    </table>

  </div>
);


}

export default Filmek;