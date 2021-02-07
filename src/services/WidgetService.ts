import axios from 'axios';
import { WidgetTypes } from '../enums/WidgetsEnum';
const headers = {
	'Content-type': 'application/json'
};

export function addWidget(type: WidgetTypes, tabId: number) {
	return axios.post(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/widget/addWidget`, { "type": type, "tab": {"id": tabId} },
		{
			headers
		});
}

export function updateWidgetData(id: number, data: any) {
	return axios.post(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/widget/updateWidgetData`, { "id": id, "data": data },
		{
			headers
		});
}

export function deleteWidget(id: number) {
	return axios.delete(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/widget/deleteWidget/?id=${id}`,
		{
			headers
		});
}