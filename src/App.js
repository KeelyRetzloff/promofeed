//main app component
import './App.scss';
import Header from './header'
import Feed from './feed'
import useHideOnScrolled from "./useHideOnScrolled";

//import photos passed down through props to mimic data
import p1 from './assets/promotions/1.jpeg'
import p2 from './assets/promotions/2.jpeg'
import p3 from './assets/promotions/3.jpeg'
import p4 from './assets/promotions/4.jpeg'
import p5 from './assets/promotions/5.jpeg'
import p6 from './assets/promotions/6.jpeg'
import p7 from './assets/promotions/7.jpeg'
import p8 from './assets/promotions/8.jpeg'
import p9 from './assets/promotions/9.jpeg'
import p10 from './assets/promotions/10.jpeg'

function App() {
  const hidden = useHideOnScrolled();
  return (
    <div className="App">
      <Header />
      <section>
        <div className="app-titlebar">
          <h1>Happening Now</h1>
          <button>Filter</button>
        </div>
        <Feed />
        {!hidden && (
        <div className="scroll-indicator shown"></div>
      )}
        <div className="scroll-indicator hidden"></div>
      </section>
      
    </div>
  );
}

export default App
