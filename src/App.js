import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
      <p>Click on book to delete..</p>
    </div> 
  );
}
 
export default App;
