import background from './assets/images/main_bg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="lm-animated-bg" style={`background-image: url("${background}");`}></div>

      <div class="preloader">
        <div class="preloader-animation">
          <div class="preloader-spinner">
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
