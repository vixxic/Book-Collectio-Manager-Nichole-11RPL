import "./App.css";
import HeaderSection from "./section/HeaderSection/HeaderSection";
import BookCollectionSection from "./section/BookCollectionSection/BookCollectionSection";
import { useBookContext } from "./GlobalContext";

function App() {
  const { isSomethingOpen } = useBookContext();
  return (
    <>
      <section id="book-aplication">
        <HeaderSection />
        <hr />

        <BookCollectionSection />
        {isSomethingOpen ? <div className="modal-black-back"></div> : ""}
      </section>
    </>
  );
}

export default App;
