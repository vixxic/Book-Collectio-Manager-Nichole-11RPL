import "../AddNewBookForm/AddNewBookForm.css";
import { useState, useEffect } from "react";
import { useBookContext } from "../../GlobalContext";

function AddNewBookForm() {
  const { setBooksData, booksData, setAddBookCliked, setIsSomethingOpen } =
    useBookContext();

  // post buku baru
  async function postNewBook(newBook) {
    const apiUrl = "https://6ab5239024ee9d3caa1c3b25.mockapi.io/books";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookData),
      });

      const createdBook = await response.json();

      setBooksData([...booksData, createdBook]);
      console.log("You just added a new book:", newBookData);
    } catch (error) {
      console.error(error.message);
    }
  }

  const [error, setError] = useState("");

  const [newBookData, setNewBookData] = useState({
    id: booksData.length + 1,
    title: "",
    author: "",
    genre: "",
    year: 0,
    description: "",
    image: "",
  });

  const handleAddNewBook = (e) => {
    e.preventDefault();

    if (
      newBookData.title.length <= 0 ||
      newBookData.author.length <= 0 ||
      newBookData.genre.length <= 0 ||
      String(newBookData.year).length !== 4 ||
      newBookData.description.length <= 0 ||
      !newBookData.image
    ) {
      setError("Pastikan semua form terisi. Tahun wajib 4 angka");
      return;
    } else {
      setError("");
    }

    postNewBook(newBookData);

    setAddBookCliked(false);
  };

  const handleCloseForm = () => {
    setAddBookCliked(false);
    setIsSomethingOpen(false);
  };

  return (
    <div id="add-book-form-con">
      <form id="add-book-form" onSubmit={handleAddNewBook}>
        <h3>Add a book</h3>

        <div className="form-input-con">
          <label>Title</label>
          <input
            type="text"
            value={newBookData.title}
            onChange={(e) =>
              setNewBookData({ ...newBookData, title: e.target.value })
            }
          />
        </div>

        <div className="horizontal">
          <div className="form-input-con">
            <label>Author</label>
            <input
              type="text"
              value={newBookData.author}
              onChange={(e) =>
                setNewBookData({ ...newBookData, author: e.target.value })
              }
            />
          </div>

          <div className="form-input-con">
            <label>Year</label>
            <input
              type="text"
              value={newBookData.year}
              onChange={(e) =>
                setNewBookData({
                  ...newBookData,
                  year: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="form-input-con">
          <label>Genre</label>
          <input
            type="text"
            value={newBookData.genre}
            onChange={(e) =>
              setNewBookData({ ...newBookData, genre: e.target.value })
            }
          />
        </div>

        <div className="form-input-con">
          <label>Description</label>
          <input
            type="text"
            value={newBookData.description}
            onChange={(e) =>
              setNewBookData({ ...newBookData, description: e.target.value })
            }
          />
        </div>

        <div className="form-input-con">
          <label>Image URL</label>
          <input
            type="text"
            value={newBookData.image}
            onChange={(e) =>
              setNewBookData({ ...newBookData, image: e.target.value })
            }
          />
        </div>

        <div className="img-preview-con">
          <div className="img-con">
            {!newBookData.image ? "" : <img src={newBookData.image} />}
          </div>
          <p>
            If the link doesn't load, a plain cover is shown instead - so your
            shelf never has broken image
          </p>
        </div>

        <p className="add-book-error">{error}</p>

        <div className="add-book-form-btns-con">
          <button onClick={() => handleCloseForm()}>Cancel</button>
          <button type="submit" className="add-btn">
            Add book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBookForm;
