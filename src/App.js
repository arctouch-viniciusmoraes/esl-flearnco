import './style/main.css';
import Header from './components/Header';
import ContentCard from './components/ContentCard';

function App() {
  return (
    <div className="Main">
      <Header />
      <section className="Main__content Container">
        <h1 className="Main-heading App-heading">
          Learn with the best. <br/>
          Learn with Flearn Co!
        </h1>
        <ContentCard />
      </section>
    </div>
  );
}

export default App;
