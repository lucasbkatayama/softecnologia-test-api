const express = require('express');
const Employee = require('../models/employee-model');

const router = express.Router()

router.post('/employee', async (req, res) => {
  const data = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
  })
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

router.get('/employee', async (req, res) => {
  try{
    const data = await Employee.find();
    res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

router.put('/employee/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Employee.findByIdAndUpdate(
        id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

router.delete('/employee/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Employee.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;