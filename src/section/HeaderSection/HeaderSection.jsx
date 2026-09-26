import "../HeaderSection/HeaderSection.css";
import { useBookContext } from "../../GlobalContext";

function HeaderSection() {
  const { setIsSomethingOpen, setAddBookCliked } = useBookContext();

  const handleAddNewBook = () => {
    setIsSomethingOpen(true);
    setAddBookCliked(true);
  };

  return (
    <section id="Header-section">
      <h1 className="header-title">Book Collection Manager</h1>
      <div className="header-content-con">
        <p>
          Every book you've read, borrowed, or want to brag about - kept on one
          shelf. 6 books on the shelf
        </p>

        <div>
          <button className="add-a-book-btn" onClick={() => handleAddNewBook()}>
            + Add a book
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
