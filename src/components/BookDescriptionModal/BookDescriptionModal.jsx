import "../BookDescriptionModal/BookDescriptionModal.css";
import { useBookContext } from "../../GlobalContext";

function BookDescriptionModal({
  id,
  title,
  author,
  genre,
  year,
  description,
  image,
}) {
  const { setViewClikedBook, setIsSomethingOpen } = useBookContext();

  const handleCloseModal = () => {
    setViewClikedBook("");
    setIsSomethingOpen(false);
  };

  return (
    <div id="modal-con">
      <div id="book-des-modal">
        <div className="modal-content-con">
          <div className="modal-top-box">
            <div className="genre-title-in-cover-con">
              <div className="genre-span">{genre}</div>
              <div>{title}</div>
            </div>

            <img className="" src={image} />
          </div>

          <p className="modal-title">{title}</p>
          <p className="modal-author">{author}</p>
          <p className="modal-genre-year">
            {genre} . {year}
          </p>
          <p className="modal-des">{description}</p>

          <div className="modal-close-btn-con">
            <button onClick={() => handleCloseModal()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDescriptionModal;
