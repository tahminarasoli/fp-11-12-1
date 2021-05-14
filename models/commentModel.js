const { Schema, model } = require('mongoose');
const commentSchema = new Schema(
	{
		cardId: {
			type: Schema.Types.ObjectId,
			ref: 'cards',
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = CommentModel =  mongoose.model('Comment', commentSchema);