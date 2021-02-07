import axios from 'axios';

const headers = {
    'Content-type': 'application/json'
};

export function addTab(label: string) {
	return axios.post(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/tab/addTab`, { "label": label },
		{
			headers
		});
}

export function updateTab(id: number, label: any, tabOrder: number) {
	return axios.post(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/tab/updateTab`, { "id": id, "label": label, "tabOrder": tabOrder},
		{
			headers
		});
}

export function deleteTab(id: number) {
	return axios.delete(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/tab/deleteTab/?id=${id}`,
		{
			headers
		});
}