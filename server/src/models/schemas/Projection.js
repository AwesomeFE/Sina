import {Schema} from 'mongoose'

const ProjectionSchema = new Schema({
  type:  {
    type: String
  },
  projection: {
    type: String,
    default: '-password'
  },
  isTest: {
    type: Boolean,
  }
}, {timestamps: true});

export default ProjectionSchema