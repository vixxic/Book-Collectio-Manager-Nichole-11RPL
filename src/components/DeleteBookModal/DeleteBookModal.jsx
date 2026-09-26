import "../DeleteBookModal/DeleteBookModal.css";
import { useBookContext } from "../../GlobalContext";

function DeleteBookModal({ title }) {
  const {
    setDeleteClikedBook,
    deleteClikedBook,
    setIsSomethingOpen,
    setBooksData,
    booksData,
  } = useBookContext();

  async function deleteBook(id) {
    const apiUrl = `https://6ab5239024ee9d3caa1c3b25.mockapi.io/books/${id}`;

    try {
      await fetch(apiUrl, {
        method: "DELETE",
      });

      setBooksData(booksData.filter((book) => book.id !== id));

      setIsSomethingOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = () => {
    deleteBook(deleteClikedBook);
  };

  const handleCloseModal = () => {
    setDeleteClikedBook("");
    setIsSomethingOpen(false);
  };

  return (
    <div id="modal-con">
      <div id="delete-book-modal">
        <h3>Remove this book?</h3>

        <p>
          {` Are you sure you want to delete "${title}"? This can't be undone.`}
        </p>

        <div className="delete-modal-btns-con">
          <button onClick={() => handleCloseModal()}>Close</button>
          <button className="delete" onClick={() => handleDelete()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBookModal;
