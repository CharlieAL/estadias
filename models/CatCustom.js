import { Schema, model, models } from 'mongoose'

const catCustomSchema = new Schema(
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

catCustomSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  }
})

export default models.CatCustom || model('CatCustom', catCustomSchema)
