import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}
