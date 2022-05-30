import { Schema,model,models } from "mongoose";
var uniqueValidator = require('mongoose-unique-validator');

const subensambleSchema = new Schema({
  subAssyNumber:{
    type: String,
    trim: true,
    unique: true,
    required: [true, 'SubAssyNumber is required']
  },
  apfItemNumer:{
    type: String,
    trim: true,
  },
  SubAssyDescription:{
    type: String,
    trim: true,
  },
  minStock:{
    type:String,
    trim: true,
  },
  bulk:{
    type:String,
    trim: true,
  },
  supplier:{
    type:String,
    trim: true,
    ref: 'supplier',
    required: [true, 'supplier is required']
  },
  catCustom:{
    type:String,
    trim: true,
    ref:'CatCustom',
    required: [true, 'catCustom is required']
  },
  category:{
    type:String,
    trim: true,
    ref:'Category',
    required: [true, 'category is required']
  },
  price:{
    type:String,
    trim: true,
  },
  weight:{
    type:String,
    trim: true,
  },
  fracAranceleria:{
    type:String,
    trim: true,
  },
  IdAduanas:{
    type:String,
    trim: true,
  },
  quantity:{
    type:String,
    trim: true,
  },
  UOM:{
    type:String,
    trim: true,
  },
  Active:{
    type:Boolean
  },
  MXmfg:{
    type:Boolean
  },
  Username:{
    type:String,
    trim: true,
    ref: 'User'
  }
},{
  timestamps:true,
  versionKey:false
})

subensambleSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  }
})

subensambleSchema.plugin(uniqueValidator);

export default models.Subensamble || model('Subensamble', subensambleSchema)