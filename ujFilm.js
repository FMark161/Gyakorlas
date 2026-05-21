import { useState } from "react";

function UjFilm() {

  const [cim, setCim] = useState("");
  const [rendezo, setRendezo] = useState("");
  const [ev, setEv] = useState("");
  const [mufaj, setMufaj] = useState("");

  const kuldes = () => {

    fetch("http://localhost:5000/api/filmek", {
      method: "POST",
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
    .then(data => {
      console.log(data);
      alert("Sikeres hozzáadás!");
    })
    .catch(err => console.log(err));

  };

  return (
    <div>

      <h1>Új film</h1>

      <input
        placeholder="Cím"
        value={cim}
        onChange={(e) => setCim(e.target.value)}
      />

      <br />

      <input
        placeholder="Rendező"
        value={rendezo}
        onChange={(e) => setRendezo(e.target.value)}
      />

      <br />

      <input
        placeholder="Év"
        value={ev}
        onChange={(e) => setEv(e.target.value)}
      />

      <br />

      <input
        placeholder="Műfaj"
        value={mufaj}
        onChange={(e) => setMufaj(e.target.value)}
      />

      <br />

      <button onClick={kuldes}>
        Hozzáadás
      </button>

    </div>
  );
}

export default UjFilm;