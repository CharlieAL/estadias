import { Schema, model, models } from 'mongoose'

const categorySchema = new Schema(
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

categorySchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  }
})

export default models.Category || model('Category', categorySchema)
