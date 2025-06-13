import React from 'react'
import { useState } from 'react'
import axios from 'axios' 
import NavBarAdmin from './NavBarAdmin'

export default function Productadd() {

  let [name, setName]= useState('')
      let [description, setDescription] = useState('')
      let [price, setPrice] = useState('')
      let [stock, setStock] = useState('')
      let [img, setImg] = useState('')
      let [createdAt, setCreatedAt] = useState('')
      let [product, setProduct] = useState('')




      let handleimg=(e)=>{
        var file=e.target.files[0];
        var fulname=`/img/${file.name}`;
        console.log("img adress"+fulname)
        setImg(fulname)
    }



    let add = (event) => {
        event.preventDefault();
        let newuser = { name, description, price, stock, img, createdAt, product }
        axios.post("http://localhost:8080/groceryshope/saveproduct", newuser)
            .then((response) => {
                if (response.data) {
                    alert("Product Addaed sucessfully")    
                }

              //  setIsShow(false);
                setName('');
                setDescription('');
                setPrice('');
                setStock('');
                setImg('')
                setCreatedAt('');
                setProduct('');
            })
            .catch((error) => { console.log("error occured" + error) })
    }


  return (
    <div>
      <NavBarAdmin />
      <div className="form-container">
        
<form onSubmit={add} className="form">
      Enter Name <input type='text' placeholder='enter product name' onChange={(e) => { setName(e.target.value) }} value={name}></input>
      Enter description <input type='text' placeholder='enter description' onChange={(e) => { setDescription(e.target.value) }} value={description}></input>
      Enter price<input type='number' placeholder='enter price' onChange={(e) => { setPrice(e.target.value) }} value={price}></input>
      Enter stock <input type='text' placeholder='enter stock ' onChange={(e) => { setStock(e.target.value) }} value={stock}></input>
      Enter createdAt <input type='date' placeholder='enter date' onChange={(e) => { setCreatedAt(e.target.value) }} value={createdAt}></input>
      Enter Product <input type='text' placeholder='enter product per kg / ml' onChange={(e) => { setProduct(e.target.value) }} value={product}></input>
      image <input type='file' accept='image/*' onChange={handleimg}></input><br></br>
     <input type='submit' className="btn btn-outline-success"  value="Submit"></input>
     </form>
    </div>
    </div>
  )
}
