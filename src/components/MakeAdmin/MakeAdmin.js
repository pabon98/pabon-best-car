import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://murmuring-castle-14767.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      alert('Admin added Successfully')
      document.getElementById('form-reset').reset()
    console.log(data);
  };
  return (
    <div>
      <h1 className='mb-3'>Add New admin</h1>
      <form id="form-reset" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-outline-dark px-2 mt-2"
          type="submit"
          value="Make Admin"
        />
      </form>
    </div>
  );

};

export default MakeAdmin;