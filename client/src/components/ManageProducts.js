import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { Container } from '@mui/system';



function ManageProducts({handlePosting}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    course_name: '',
    course_period: '',
    total_units: '',
    fees_amount: '',
})
function handleSubmit(e){
    e.preventDefault();
    fetch(`https://group-3-backend-app.herokuapp.com/courses`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
        handlePosting(data)
    })

    setFormData({
        course_name: '',
        course_period: '',
        total_units: '',
        fees_amount: '',
    })
}
function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
}  




  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/api/vendor_products")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(data)})
      console.log(products)
  }, [])

  function handleDeleteProduct(){

  }

  return (
    <>


    <div>
        <Container className='formContainer '>
    <div 
    style={{ fontSize: "20px", fontWeight: "bold" }}
    >
        Course Form
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' , color: "white"}}>
      <div>
        <FormControl sx={{ m: 1, width: '35ch', color: "white"}}>
            <InputLabel>Course_name</InputLabel>
            <Input name="course_name" value={formData.course_name} onChange={handleChange}/>
            <FormHelperText>Please Enter Course name</FormHelperText>
        </FormControl>
      </div>
      <div>
      <FormControl sx={{ m: 1, width: '35ch' }}>
        <InputLabel>Course_period</InputLabel>
        <Input name="course_period" value={formData.course_period} onChange={handleChange}/>
        <FormHelperText>Enter Course Period</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Total_units</InputLabel>
            <Input name="total_units" value={formData.total_units} onChange={handleChange}/>
            <FormHelperText>Enter Total Units</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Fees Amount</InputLabel>
            <Input name="fees_amount" value={formData.fees_amount} onChange={handleChange}/>
            <FormHelperText>Enter Fees Amount</FormHelperText>
        </FormControl>
      </div>
    </Box>
    <div>
        <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
            <Button variant='outlined' type='submit' onClick={handleSubmit}>
                SUBMIT
            </Button>
        </FormControl>
      </div>
    </Container>
    </div>






{/* <form>

  <div class="grid md:grid-cols-2 md:gap-6 max-w-7xl">
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}










      <h1 className="text-center p-3 text-white text-xl font-bold">
        PRODUCTS THAT YOU CURRENTLY SELL
      </h1>
<div className="overflow-x-auto relative dark">
    <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
        <thead className="text- text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Product Image
                </th>
                <th scope="col" className="py-3 px-6">
                    Product Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Product Price
                </th>
                <th scope="col" className="py-3 px-6">
                    Edit Product
                </th>
                <th scope="col" className="py-3 px-6">
                    Remove Product
                </th>
            </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
           <img className='w-[100px] h-20 rounded-md object-cover ml-5'
           src={product.image_url} alt="product" ></img>
           </th>
            <td className="py-4 px-6">
                {product.title}
                
            </td>
            <td className="py-4 px-6 ">
            {product.price}
            </td>
            <td className="py-4 px-6 ">
            <button className=" bg-blue-800 text-white text-center hover:bg-blue-500 mt-5 ml-5  py-2 px-4 border border-red-400 hover:border-transparent rounded"
            onClick={() => navigate('/product_edit')}>
                  Edit Product
                </button>
            </td>

            <td className="py-4 px-6">
            <button className=" bg-red-800 text-white text-center hover:bg-red-900 mt-5 ml-5  py-2 px-4 border border-red-400 hover:border-transparent rounded"
            onClick={() => handleDeleteProduct(product.id)}>
                  <FaTrashAlt />
                </button>
            </td>
        </tr>
          ))}

           
        </tbody>
    </table>
</div>
    </>
  );
}

export default ManageProducts;
