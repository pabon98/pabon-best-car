import axios from 'axios';
import React from 'react';
import './AddCar.css'
import { useForm } from "react-hook-form";
const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://murmuring-castle-14767.herokuapp.com/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-car">
        <h2 className='text-center'>Add New Car</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("image")} placeholder="image url" />
            <input className='btn btn-dark' type="submit" />
        </form>
    </div>
);
};
export default AddCar;