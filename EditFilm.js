import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditFilm() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [cim, setCim] = useState("");
  const [rendezo, setRendezo] = useState("");
  const [ev, setEv] = useState("");
  const [mufaj, setMufaj] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/filmek/${id}`)
      .then(res => res.json())
      .then(data => {
        const film = data[0];
        setCim(film.cim);
        setRendezo(film.rendezo);
        setEv(film.ev);
        setMufaj(film.mufaj);
      });
  }, [id]);

  const mentes = () => {

    fetch(`http://localhost:5000/api/filmek/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cim,
        rendezo,
        ev,
        mufaj
      })
    })
    .then(res => res.json())
    .then(() => {
      alert("Sikeres módosítás!");
      navigate("/");
    })
    .catch(err => console.log(err));

  };

  return (
    <div>

      <h1>Film szerkesztése</h1>

      <input value={cim} onChange={(e) => setCim(e.target.value)} />
      <input value={rendezo} onChange={(e) => setRendezo(e.target.value)} />
      <input value={ev} onChange={(e) => setEv(e.target.value)} />
      <input value={mufaj} onChange={(e) => setMufaj(e.target.value)} />

      <button onClick={mentes}>
        Mentés
      </button>

    </div>
  );
}

export default EditFilm;