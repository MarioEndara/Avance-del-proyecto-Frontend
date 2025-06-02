import { Router }    from "express";
import { registro } from "../controllers/veterinario_controle.js";
 const router = Router()
 router .post('/registro',registro)

 export default router