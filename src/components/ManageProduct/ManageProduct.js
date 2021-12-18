import React from 'react';

const ManageProduct = (props) => {
    const { _id, title, image, price } = props.car;
    const { handleDeleteProduct } = props;

    return (
        <tr>
            <td>
                <img src={image} style={{ width: '50px', height: '50px' }} alt="" />
            </td>
            <td>{title}</td>
            <td>{price}</td>
            <td>In stock</td>
            <td>
                <span>
                    <button className='btn btn-outline-danger' onClick={() => handleDeleteProduct(_id)}>
                        <i className="fas fa-times-circle"></i>
                    </button>
                </span>
            </td>
        </tr>
    );
};

export default ManageProduct;