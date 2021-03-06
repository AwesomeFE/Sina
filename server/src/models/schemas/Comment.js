import {Schema} from 'mongoose'

const CommentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    refs: 'Users'
  },
  targetType: {
    type: String
  },
  target: {
    type: Schema.Types.ObjectId,
    refPath: 'targetType'
  },
  commentId: {
    type: Schema.Types.ObjectId
  },
  content: {
    type: String
  },
  attachments: [{
    type: Schema.Types.ObjectId,
    refs: 'Attachments'
  }],
  isTest: {
    type: Boolean,
  }
}, {timestamps: true})

export default CommentSchema
