import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export function GlobalContext({ children }) {
  const [isSomethingOpen, setIsSomethingOpen] = useState(false);
  const [viewClikedBook, setViewClikedBook] = useState("");
  const [editClikedBook, setEditClikedBook] = useState("");
  const [deleteClikedBook, setDeleteClikedBook] = useState("");
  const [addBookCliked, setAddBookCliked] = useState(false);
  const [booksData, setBooksData] = useState([]);

  return (
    <BookContext.Provider
      value={{
        isSomethingOpen,
        setIsSomethingOpen,
        viewClikedBook,
        editClikedBook,
        setEditClikedBook,
        deleteClikedBook,
        setDeleteClikedBook,
        setViewClikedBook,
        addBookCliked,
        setAddBookCliked,
        booksData,
        setBooksData,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export const useBookContext = () => {
  return useContext(BookContext);
};
