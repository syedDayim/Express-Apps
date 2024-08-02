import mongoose from "mongoose";

const schema = {
    name: {type: String, required: true, trim: true},
    age: {type: Number, required: true, min: 18, max: 60},
    fees: {type: mongoose.Decimal128, required: true}
};

const studentSchema = new mongoose.Schema(schema);
const studentModel = new mongoose.model('students', studentSchema);

export { studentModel };