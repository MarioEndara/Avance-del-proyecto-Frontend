import Veterinario from "../../Veterinario.js"

const registro = async(req,res) => {
    const{email,password} = req.body
    if(Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, todos los campos son obligatorios"})
    const verificarEmailBDD = await Veterinario.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, este email ya se encuientra registrado"})

    const nuevoVeterinario = new Veterinario(req.body)

    nuevoVeterinario.password= await nuevoVeterinario.encryptPassword(password)
    nuevoVeterinario.createToken()
    await nuevoVeterinario.save()
    res.status(200).json({nuevoVeterinario})

}

export {
    registro
}