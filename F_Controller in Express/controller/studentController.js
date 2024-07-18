import express from 'express';


const allStudents = (req, res) => {
    res.send("Hello Student");
}

const studentID = (req, res) => {
    const { id } = req.params;
    if (id == "10") {
      res.send("This is 10th Student");
    } else {
      res.send(`Student ID: ${id}`);
    }
}

export { allStudents, studentID};