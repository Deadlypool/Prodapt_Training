import {useState} from 'react'
// import data from '../data/db.json'
import { addProduct } from '../api/api'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [inStock, setInStock] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            // id: data.products.length +1,
            name: name,
            price: price,
            category: category,
            inStock: inStock
        };
        try{
            await addProduct(newProduct);
            alert("Product added successfully.");
            setName("");
            setPrice(0);
            setCategory("");
            setInStock(false);
        }
        catch(error){
            alert("Failed to add Product: ",error)
        };
        // data.products.push(newProduct)
        // alert("Product added successfully.")
        // setName('')
        // setPrice('')
        // setCategory('')
        // setInStock(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Product</h1>
                <label>Product Name:</label>
                <input type="text" name="product" value= {name} onChange={(e) => setName(e.target.value)} /><br/>
                <label>Price:</label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /><br/>
                <label>Category:</label>
                <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} /><br/>
                <label>In Stock:</label>
                <input type="checkbox" name="inStock" checked={inStock} onChange={(e) => setInStock(e.target.checked)} /><br/>
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct