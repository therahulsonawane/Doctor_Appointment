import mongoose from "mongoose";

// this is doctor schema
const doctorSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    image: { type: String, require: true },
    speciality: { type: String, require: true },
    degree: { type: String, require: true },
    experience: { type: String, require: true },
    about: { type: String, require: true },
    available: { type: Boolean, default:true     },
    fees: { type: Number, require: true },
    address: { type: Object, require: true },
    date: { type: Number, require: true },
    slots_booked: { type: Object, default: {} },
}, { minimize: false })


const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)
export default doctorModel
