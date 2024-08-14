const express = require('express');
const Joi = require('joi');
const app = express();
const logger = require('./logger');
const mongoose = require('mongoose');

const Course = mongoose.model('courses', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    author: String,
}))

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('public'))

app.use(logger)

app.get('/', async (req, res) => {
    res.send('Welcome To Our Course Page')
})

app.get('/api/courses', async (req, res) => {
    const course = await Course.find();
    res.send(course)
})

app.get('/api/courses/:id', async (req, res) => {
    const course = await Course.findById(req.params.id)
    if (!course) return res.status(404).send('Course not found');
})

app.post('/api/courses', async (req, res) => {
    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message)

    const course = new Course ({ name: req.body.name })
    const result = await Course.save();
    res.send(result)
})

app.put('api/courses/:id', async (req, res) => {
    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message)

    const course = await Course.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new:true })

    if (!course) return res.status(404).send('Course not found');

    res.send(course)
})

app.delete('/api/course/:id', async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id)

    if (!course) return res.status(404).send('Course not found');
     
    res.send(course)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`));

const validateCourse = (course) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(req.body, schema);
}