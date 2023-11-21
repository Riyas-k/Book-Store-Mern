/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookSingle from "./BookSingle";

const BooksCard = ({books}) => {
  return (
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books?.books?.map((book)=>(
           <BookSingle key={book._id} book={book}/>
        ))}
       </div>
  )
};

export default BooksCard;
