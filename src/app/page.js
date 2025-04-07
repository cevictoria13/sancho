
import Poeta from "./poeta/Poeta"
import Doctor from "./doctor/Doctor";
import Andino from "./andino/Andino";
import SanchoAbout from "./components/SanchoAbout";
import Loco from "./loco/Loco";
import Carrusel from "./components/Carrusel";

function Home() {
  return (
    <section>
    <Carrusel/>
    <SanchoAbout/>  
    <Poeta/>
    <Doctor />
    <Andino />
    <Loco />
  </section>
  );
}

export default Home