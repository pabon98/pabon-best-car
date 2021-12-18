// import axios from 'axios';
// import React from 'react';
// import { useForm } from "react-hook-form";
// import './Review.css'


// const Review = () => {
//     const { register, handleSubmit, reset } = useForm();

//     const onSubmit = data => {
//         console.log(data);

//         axios.post('https://murmuring-castle-14767.herokuapp.com/cars', data)
//             .then(res => {
//                 if (res.data.insertedId) {
//                     alert('added successfully');
//                     reset();
//                 }
//             })
//     }
//     return (
//         <div className="add-tour">
//         <h2>Please Add a Service</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
//             <textarea {...register("description")} placeholder="Description" />
//             <input type="number" {...register("price")} placeholder="price" />
//             <input {...register("image")} placeholder="image url" />
//             <input className='btn btn-dark' type="submit" />
//         </form>
//     </div>
// );
// };

// export default Review;



import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css';
const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://murmuring-castle-14767.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-review">
        <h2 className='text-center'>Please Add Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("comments")} placeholder="Comments" />
            <input type="number" {...register("rating")} placeholder="Rating" />
            
            <input className='btn btn-dark' type="submit" />
        </form>
    </div>
);
};

export default Review;