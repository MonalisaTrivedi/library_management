import React, { useEffect, useState } from 'react'
import { deleteBooks, getBooks } from './Api'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Books = () => {
   const[books,setBooks]= useState([])
    const books_details=async()=>{
        const res=await getBooks()
        setBooks(res?.data)
        console.log(res)
    }
    useEffect(()=>{
        books_details()
    },[])

    const Delete=async(id)=>{
        await deleteBooks(id)
        toast("Delete Successfully")
        books_details()
    }
  return (
   <>
   <div className="container mt-3">
    <div className="row">
        <div className="col">
            <h1>Books</h1>
            <Link to="/Add_book" className='btn btn-primary mb-3'>Add New</Link>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
      <th scope="col">Publish Date</th>
      <th scope="col">Total Copy</th>
      <th scope="col">Available</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        books?.map((item,key)=>{
            return (<>
                <tr>
      <th scope="row">{key+1}</th>
      <td>{item.book_name}</td>
      <td>{item.author}</td>
      <td>{item.price}</td>
      <td>{item.publish_date}</td>
      <td className='pl-4'>{item.no_of_copy}</td>
      <td className='pl-4'>{item.available}</td>
      <td><Link to={`/Edit/${item.id}`} className='btn btn-success mr-3'>Update</Link>
      <button className='btn btn-danger' onClick={()=>Delete(item.id)}>Delete</button></td>
    </tr>
            </>)
     
        })
    }
    
  </tbody>
</table>
        </div>
    </div>
   </div>

   </>
  )
}

export default Books