import axios from "axios";
import {URL_BACKEND} from "../config";

class ProductService {
    static async getAll() {
        return await axios.get(`${URL_BACKEND}/products`)
    }
}
export default ProductService