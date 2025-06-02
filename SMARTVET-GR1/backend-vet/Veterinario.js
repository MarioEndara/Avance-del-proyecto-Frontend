import {Schema,model} from 'mongoose';

import bcrypt from 'bcryptjs';
import { response } from 'express';

const veterinarioSchema = new Schema({
  nombre:{
    type:String,
    required:true,
    trim:true,
  },
    direccion:{
    type:String,
    required:true,
    trim:true,
  },
  celular:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  status:{
    type:Boolean,
    default:true,
  },
  tooken:{
    type:String,
    default:null,
  },
  confirmEmail:{
    type:Boolean,
    default:false,
  },
  rol:{
    type:String,
    default:"veterinario",
  }
  },{
    timnestamps:true
  })

  // Metodos para cifrar el password del veterinario
  veterinarioSchema.methods.encrypPassword = async function(password){
    const salt= bcrypt.genSalt(10)
    const passwordEncryp = await bcryypt.hash(password,salt)
    return passwordEncryp;
  }

  //Metodo para verificar si el password ingresado es el mismo de la BBD
  veterinarioSchema.methods.matchPassword = async function(password){
    const renponse = bcrypt.compare(password,this.password)
    return response

  }

  //Metodo para crear un token
  veterinarioSchema.methods.crearToken = function(password){
    const tokenGenerado = this.token = Math.random().toString

  }
  export default model('Veterinario',veterinarioSchema)


    



