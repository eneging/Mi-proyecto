
import "./App.css";
import Buscador from "./nav/Buscador";




function App() {


  return (

    <>
      <main>

        <div className="container-All-cards">
                <Buscador/>
        </div>
      </main>

      <footer>
        <ul className="ul-footer">
          <li>© 2023 windbnb,Inc.</li>
          <li>. Privacidad</li>
          <li>. Terminos</li>
          <li>. Mapa del sitio</li>
        </ul>
      </footer>

      
    </>
  );
}

export default App;


