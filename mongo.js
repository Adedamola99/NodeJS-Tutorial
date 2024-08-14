const { date } = require("joi");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Database connected...'))
    .catch(() => console.error('Could not connect to database', error))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

// async function createCourse () {
//     const course = new Course ({
//         name: 'Angular Js',
//         author: 'Damola',
//         tags: ['Frontend', 'backend'],
//         isPublished: true
//     });

//     const result = await course.save();
//     console.log(result);
// }

async function getCourse () {
    const courseResult = await Course.find({ name: 'Angular Js', isPublished: true})
    console.log(courseResult);
}

// createCourse();
getCourse();