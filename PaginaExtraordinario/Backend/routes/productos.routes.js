import expresss from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productos.controllers.js";
const router =expresss.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;