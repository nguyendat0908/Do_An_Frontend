import axios from '../utils/axiosCustomize';

const createUser = (username, email, password, address, phone, isActive, image) => {
    const data = new FormData();
    data.append('name', username);
    data.append('email', email);
    data.append('password', password);
    data.append('address', address);
    data.append('phone', phone);
    data.append('active', isActive ? 'true' : 'false');
    if (image && image.name) {
        data.append('avatar', image);
    }

    return axios.post('api/v1/users', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const getAllUsers = () => {
    return axios.get('api/v1/users');
};

const getUserById = (userId) => {
    return axios.get(`api/v1/users/${userId}`);
};

const updateUser = (id, active) => {
    const data = {
        id: id,
        active: active,
    };
    return axios.put('/api/v1/users', data);
};

const deleteUser = (userId) => {
    return axios.delete(`api/v1/users/${userId}`);
};

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
