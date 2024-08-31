import axios from 'axios';


export const getallStores = async (url,id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addStores = async (url,store) => {
    return await axios.post(url,store);
}

export const editStores = async (url,id, store) => {
    return await axios.put(`${url}/${id}`,store);
}


export const deleteStores = async (url,id) => {
    return await axios.delete(`${url}/${id}`);
}


export const getallEvents = async (url,id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addEvents = async (url,store) => {
    return await axios.post(url,store);
}

export const editEvents = async (url, id, store) => {
    return await axios.put(`${url}/${id}`,store);
}


export const deleteEvents = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
}


export const authUsers = [
	{
		id: "1001",
		username: "admin",
		name: "Admin",
		pass: "1234",
	},
	{
		id: "1002",
		username: "yhulisa",
		name: "Yhulisa Parisaca",
		pass: "1234",
	},
	{
		id: "1003",
		username: "jhonny",
		name: "Jhonny Pastor",
		pass: "1234",
	},
	{
		id: "1004",
		username: "jossimar",
		name: "Jossimar",
		pass: "1234",
	},
];