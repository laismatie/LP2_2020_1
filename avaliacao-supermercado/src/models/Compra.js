import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    quantidade:{
        type: Number,
        required: true
    },
    marca: String
});

const Compra = mongoose.model('Compra', esquema);

export default Compra;