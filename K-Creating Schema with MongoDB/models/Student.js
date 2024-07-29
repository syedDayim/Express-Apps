import mongoose from "mongoose";

const schema = {
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 90 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: {
      validator: (v) => {
        return v >= 5000.50;
      },
      message: props => `${props.value} is less than the minimum allowed fee (5000.50)`
    }
  },
  hobbies: { type: [String] },
  isActive: { type: Boolean },
  comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
  join: { type: Date, default: Date.now }
};

const studentSchema = new mongoose.Schema(schema);
const studentModel = mongoose.model('student', studentSchema);

const createDOC = async () => {
  try {
    const entry = new studentModel({
      name: "Dayim",
      age: 19, // This will cause validation error as age is less than 18
      fees: 60000.59,
      hobbies: ["reading", "swimming"],
      isActive: true,
      comments: [{ value: 'This is a first comment' }]
    });

    const result = await entry.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { createDOC };
