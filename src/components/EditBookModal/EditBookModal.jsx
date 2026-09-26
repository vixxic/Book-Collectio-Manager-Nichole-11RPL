import "../EditBookModal/EditBookModal.css";
import { useState } from "react";
import { useBookContext } from "../../GlobalContext";

function EditBookModal({ id, title, author, genre, year, description, image }) {
  const {
    editClikedBook,
    setEditClikedBook,
    setIsSomethingOpen,
    setBooksData,
  } = useBookContext();

  const [newBookData, setNewBookData] = useState({
    id: id,
    title: title,
    author: author,
    genre: genre,
    year: year,
    description: description,
    image: image,
  });

  async function editBook(id) {
    const apiUrl = `https://6ab5239024ee9d3caa1c3b25.mockapi.io/books/${id}`;

    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookData),
      });

      const data = await response.json();

      setBooksData((prevBooks) =>
        prevBooks.map((book) => (book.id === id ? data : book)),
      );

      console.log(`Updated book:`, data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleEditBook = (e) => {
    e.preventDefault();

    editBook(editClikedBook);
    setEditClikedBook("");
    setIsSomethingOpen(false);
  };

  return (
    <div id="add-book-form-con">
      <form id="add-book-form" onSubmit={handleEditBook}>
        <h3>Edit book</h3>

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
              type="number"
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

        <div className="add-book-form-btns-con">
          <button>Cancel</button>
          <button type="submit" className="add-btn">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBookModal;
