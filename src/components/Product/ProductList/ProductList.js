import {useEffect, useState} from "react";
import ProductService from "../../../services/product.service";

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductService.getAll().then(res => {
            console.log(res)
            setProducts(res.data)
        })
    }, []);

    return (
        <>
            <table>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Image</td>
                    <td>Price</td>
                    <td>Category</td>
                </tr>
                { products.length > 0 && products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt="" width={100}/></td>
                            <td>{product.price}</td>

                            <td>{product.category}</td>
                        </tr>
                ))}
            </table>
        </>
    )
}

export default ProductList;