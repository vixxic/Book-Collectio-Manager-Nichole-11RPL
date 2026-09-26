import "../BookCollectionSection/BookCollectionSection.css";
import BookDisplayCard from "../../components/BookDisplayCard/BookDisplayCard";
import BookDescriptionModal from "../../components/BookDescriptionModal/BookDescriptionModal";
import AddNewBookForm from "../../components/AddNewBookForm/AddNewBookForm";
import DeleteBookModal from "../../components/DeleteBookModal/DeleteBookModal";
import EditBookModal from "../../components/EditBookModal/EditBookModal";

import { useBookContext } from "../../GlobalContext";

import { useEffect } from "react";

function BookCollectionSection() {
  const {
    viewClikedBook,
    setBooksData,
    booksData,
    addBookCliked,
    deleteClikedBook,
    editClikedBook,
  } = useBookContext();

  useEffect(() => {
    async function fetchBookData() {
      const apiUrl = "https://6ab5239024ee9d3caa1c3b25.mockapi.io/books";

      try {
        const response = await fetch(apiUrl);

        const data = await response.json();
        setBooksData(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchBookData();
  }, []);

  const viewedBookData = booksData.find((book) => book.id === viewClikedBook);
  const editedBookData = booksData.find((book) => book.id === editClikedBook);
  const deletedBookData = booksData.find(
    (book) => book.id === deleteClikedBook,
  );

  return (
    <section id="books-display-section">
      {booksData.map((book) => (
        <BookDisplayCard
          key={book.id}
          id={book?.id}
          title={book?.title}
          author={book?.author}
          genre={book?.genre}
          year={book?.year}
          description={book?.description}
          image={book?.image}
        />
      ))}

      {viewClikedBook !== "" && viewedBookData && (
        <BookDescriptionModal
          id={viewedBookData.id}
          title={viewedBookData.title}
          author={viewedBookData.author}
          genre={viewedBookData.genre}
          year={viewedBookData.year}
          description={viewedBookData.description}
          image={viewedBookData.image}
        />
      )}

      {editClikedBook !== "" && editedBookData && (
        <EditBookModal
          id={editedBookData.id}
          title={editedBookData.title}
          author={editedBookData.author}
          genre={editedBookData.genre}
          year={editedBookData.year}
          description={editedBookData.description}
          image={editedBookData.image}
        />
      )}

      {addBookCliked ? <AddNewBookForm /> : ""}
      {deleteClikedBook !== "" && deletedBookData && (
        <DeleteBookModal title={deletedBookData.title} />
      )}
    </section>
  );
}

export default BookCollectionSection;
