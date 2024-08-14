const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost3000/exercise");

const courseSchema = new mongoose.Schema({
    name: String,
    title: String,
    tags: [String],
    price: Number,
    isPublished: Boolean,
})

const Course = mongoose.model("Course", courseSchema);

async function getNewCourse() {
    return await Course
    .find({name: "Hammed", isPublished: true})
    .sort({name: 1})
}

async function run (params) {
    const courses = await getNewCourse();
    console.log(courses);
}

run()