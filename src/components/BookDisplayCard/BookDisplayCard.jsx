import "../BookDisplayCard/BookDisplayCard.css";
import { useBookContext } from "../../GlobalContext";
import BookDescriptionModal from "../BookDescriptionModal/BookDescriptionModal";

function BookDisplayCard({ id, title, author, genre, year, image }) {
  const {
    setViewClikedBook,
    setIsSomethingOpen,
    setDeleteClikedBook,
    setEditClikedBook,
  } = useBookContext();

  const handleView = (id) => {
    setViewClikedBook(id);
    console.log(`You just viewed a book with an id ${id}`);

    setIsSomethingOpen(true);
  };

  const handleDelete = (id) => {
    setDeleteClikedBook(id);
    setIsSomethingOpen(true);
  };

  const handleEdit = (id) => {
    setEditClikedBook(id);
    setIsSomethingOpen(true);
  };

  return (
    <div className="book-display-card">
      <div className="book-cover-con">
        <div className="genre-title-in-cover-con">
          <div className="genre-span">{genre}</div>
          <div>{title}</div>
        </div>

        <img className="book-cover-img" src={image} alt={title} />
      </div>

      <div className="book-preview-des-con">
        <p>{author}</p>
        <p>
          {genre} . {year}
        </p>

        <div className="book-card-actions-con">
          <button onClick={() => handleView(id)}>View</button>
          <button onClick={() => handleEdit(id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default BookDisplayCard;
