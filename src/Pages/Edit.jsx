import React, { useEffect, useState } from 'react'
import { editBooks, updateBooks } from './Api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Edit = () => {
  const navi=useNavigate()
  const initalvalue={
    book_name:"",
    author:"",
    price:"",
    publish_date:"",
    available:"",
    no_of_copy:""
  }
  const [book,setBook]=useState(initalvalue)
  const [error,setError]=useState({})
  const{id}=useParams()

  const validation=(value)=>{
    let error={}
    if(!value.book_name){
      error.book_name="Book name Required"
    }
    if(!value.author){
      error.author="Author name required"
    }
    if(!value.price){
      error.price="Price required"
    }
    if(!value.publish_date){
      error.publish_date="Publish date required"
    }
    if(!value.available){
      error.available="Availability required"
    }
    if(!value.no_of_copy){
      error.no_of_copy="No of copy required"
    }
    return error
  }

  let name,value
  const handelChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setBook((values)=>({...values,[name]:value}))

    if(name==="book_name"){
      if (value.length===0) {
        setError({...error,book_name:"@field required"})
        setBook({...book,book_name:""})
      } else {
        setError({...error,book_name:""})
        setBook({...book,book_name:value})
      }
    }

    if(name==="author"){
      if (value.length===0) {
        setError({...error,author:"@field required"})
        setBook({...book,author:""})
      } else {
        setError({...error,author:""})
        setBook({...book,author:value})
      }
    }

    if(name==="price"){
      if (value.length===0) {
        setError({...error,price:"@field required"})
        setBook({...book,price:""})
      } else {
        setError({...error,price:""})
        setBook({...book,price:value})
      }
    }

    if(name==="publish_date"){
      if (value.length===0) {
        setError({...error,publish_date:"@field required"})
        setBook({...book,publish_date:""})
      } else {
        setError({...error,publish_date:""})
        setBook({...book,publish_date:value})
      }
    }

    if(name==="available"){
      if (value.length===0) {
        setError({...error,available:"@field required"})
        setBook({...book,available:""})
      } else {
        setError({...error,available:""})
        setBook({...book,available:value})
      }
    }

    if(name==="no_of_copy"){
      if (value.length===0) {
        setError({...error,no_of_copy:"@field required"})
        setBook({...book,no_of_copy:""})
      } else {
        setError({...error,no_of_copy:""})
        setBook({...book,no_of_copy:value})
      }
    }
    
  }

  const postSubmit=async(e)=>{
    e.preventDefault()
    let errorList=validation(book);
    setError(validation(book));
    if(Object.keys(errorList).length===0){
      await updateBooks(book,id)
      toast("Update Data Successfully")
      navi('/Books')
    }
  }

  const Edit=async()=>{
    const res= await editBooks(id)
    setBook(res?.data)
  }
  useEffect(()=>{
    Edit()
  },[])
  return (
    <>
     <div className="container">
    <div className="row">
      <div className="col">
        <h1>Add Book's Details</h1>
        <form onSubmit={postSubmit}>
  <div class="form-group">
    <label>Book's Name</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" name='book_name' value={book.book_name} onChange={e=>handelChange(e)}/>
  <h6 className='text-danger'>{error.book_name}</h6>
  </div>
  <div class="form-group">
    <label>Author's Name</label>
    <input type="text" class="form-control" name='author' value={book.author} onChange={e=>handelChange(e)}/>
    <h6 className='text-danger'>{error.author}</h6>
  </div>
  <div class="form-group">
    <label>Price</label>
    <input type="number" class="form-control" name='price' value={book.price} onChange={e=>handelChange(e)}/>
    <h6 className='text-danger'>{error.price}</h6>
  </div>
  <div class="form-group">
    <label>Publication Date</label>
    <input type="date" class="form-control" name='publish_date' value={book.publish_date} onChange={e=>handelChange(e)}/>
    <h6 className='text-danger'>{error.publish_date}</h6>
  </div>
  <div class="form-group">
    <label>Total Copy</label>
    <input type="number" class="form-control" name='no_of_copy' value={book.no_of_copy} onChange={e=>handelChange(e)}/>
    <h6 className='text-danger'>{error.no_of_copy}</h6>
  </div>
  <div class="form-group">
    <label>Avalibality</label>
    <input type="text" class="form-control" name='available' value={book.available} onChange={e=>handelChange(e)}/>
    <h6 className='text-danger'>{error.available}</h6>
  </div>

  <button type="submit" class="btn btn-primary">Update</button>
</form>
      </div>
    </div>
   </div>
    </>
  )
}

export default Edit