import { Schema, model, models } from 'mongoose'

const supplierSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  },
  {
    versionKey: false
  }
)

supplierSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  }
})

export default models.Supplier || model('Supplier', supplierSchema)
