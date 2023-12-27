import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import TabButton from './components/TabButton';
import componentsImg from './assets/components.png';

function App() {
  const handleClick = (selectedButton) =>{
    console.log(selectedButton)
    };
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            {/* isto acima é o mesmo disto de baixo */}
            <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleClick('components')} >Component</TabButton>
            <TabButton onSelect={()=>handleClick('jsx')} >JSX</TabButton>
            <TabButton onSelect={()=>handleClick('props')} >Props</TabButton>
            <TabButton onSelect={()=>handleClick('state')} >State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
