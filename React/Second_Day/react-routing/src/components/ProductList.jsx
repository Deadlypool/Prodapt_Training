import { useState, useEffect } from 'react'
import data from "../data/db.json"
import { getProducts } from '../api/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    // const [editId, seteditId] = useState(null);
    // const [editForm, setEditForm] = useState({prodcut: '', price: '', category: '', inStock: ''});

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const data = await getProducts();
                setProducts(data);
            }
            catch(error){
                console.error("Failed to fetch products: ", error)
            }
        };
        fetchProducts();
    }, []);

  return (
    <div>
        <h1>ProductList</h1>
        {
            products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
                    <br></br>
                </div>
             )
            )
        }
    </div>
  )
}

export default ProductList