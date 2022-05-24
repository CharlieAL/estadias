import { Schema,model,models } from "mongoose";

const productoSchema = new Schema({
  NumParteGen:{
    type: String,
    trim: true,
  },
  partNumber:{
    type: String,
  },
  Category:{
    type: String,
    trim: true,
  },
  Details:{
    type:String,
    trim: true,
  },
  Description:{
    type:String,
    trim: true,
  },
  Alias:{
    type:String,
    trim: true,
  },
  Customer:{
    type:String,
    trim: true,
  },
  Buyer:{
    type:String,
    trim: true,
  },
  Price:{
    type:String,
    trim: true,
  },
  StockMin:{
    type:String,
    trim: true,
  },
  Stacking:{
    type:String,
    trim: true,
  },
  StackVol:{
    type:String,
    trim: true,
  },
  Weight:{
    type:String,
    trim: true,
  },
  LaborTime:{
    type:String,
    trim: true,
  },
  Obsolete:{
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

productoSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  }
})

export default models.Producto || model('Producto',productoSchema)