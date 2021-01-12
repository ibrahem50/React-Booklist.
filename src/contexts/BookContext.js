import React,{createContext,/*useState,*/useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider=(props)=>{
    /*const [books,setBooks]=useState([
        {title:'name of the wind',author:'patrick rothfuss', id:'1'},
        {title:'the final empire',author:'brandon sanderson', id:'2'}
    ]);*/

    const [books,dispatch]=useReducer(bookReducer,[]);

    /*const addBook = (title,author)=>{
        setBooks([...books,{title,author,id:Math.floor(Math.random()*100)}]);
    };
    const removeBook = (id)=>{
        setBooks(books.filter(book=>book.id!==id));
    };*/

    return(
        <BookContext.Provider value={{books,dispatch}}>
           {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;