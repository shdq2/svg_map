import './App.css';
import WorldMap from './Svg';
import mapimg from './demo_world.png';
function App() {
  const click = (e)=>{
  }

  return (
    <div className="App" >
        <WorldMap></WorldMap>
        {/* <img class="map" src={mapimg} width="800" height="400" usemap="#world" /> */}

    </div>
  );
}

export default App;
