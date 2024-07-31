import mongoose from "mongoose";


const schema = {
    name: {type: String, required: true},
    age: {type: Number, required: true, min: 18, max: 80},
    about: {type: String, required: true}
};

const studentSchema = new mongoose.Schema(schema);
const studentModel = new mongoose.model('student', studentSchema);

const getAllDocs = async () => {
  const data = await studentModel.find();
  data.forEach(element => {
    console.log(element.name, element.age, element.about)
    
  });
}

export { getAllDocs };
