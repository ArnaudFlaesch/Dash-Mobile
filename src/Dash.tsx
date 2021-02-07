import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITab } from './model/Tab';
import Store from './pages/store/Store';
import { toggleSelectedTab } from './reducers/actions';
import { ITabState } from './reducers/tabReducer';
import { addTab } from './services/TabService';
import { addWidget } from './services/WidgetService';
import TabDash from './tab/TabDash';
import { IWidgetConfig } from './widgets/IWidgetConfig';
import { Button, StyleSheet, View } from 'react-native';

const fetch = require("node-fetch")
export interface IMenu {
	link: string;
	icon: string;
}

export default function Dash() {
	const [tabs, setTabs] = useState<ITab[]>([]);
	const [newWidget, setNewWidget] = useState<IWidgetConfig>()
	const [modal, setModal] = useState(false);

	// const activeTab = useSelector((state: ITabState) => state.activeTab);
//	const dispatch = useDispatch();

	function initDashboard() {
		fetch(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/tab/`)
			.then((result) => {
				return result.json();
			})
			.then(result => {
				if (!result || result.length === 0) {
					addNewTab();
				}
				setTabs(result);
			//	dispatch(toggleSelectedTab(result[0].id.toString()))
			})
			.catch((error: Error) => {
			});
	}

	function toggleTab(tab: string) {
	//	if (activeTab !== tab) {
	//		dispatch(toggleSelectedTab(tab))
	//	}
	}

	function addNewTab() {
		const newTabLabel = "Nouvel onglet";
		addTab(newTabLabel)
			.then((response) => {
				setTabs(tabs.concat(response.data));
			//	dispatch(toggleSelectedTab(response.data.id))
			})
	}

	function getNewWidget(tabId: number) {
		if (newWidget && tabId === newWidget.tab.id) {
			return newWidget;
		} else {
			return null;
		}
	}

	function toggleModal() {
		setModal(!modal);
	}

	function onWidgetAdded(type: any) {
	//	if (activeTab) {
	//		addWidget(type.target.value, parseInt(activeTab, 0))
	//			.then((response) => {
	//				if (response) {
	//					const widgetData: IWidgetConfig = response.data;
	//					setNewWidget(widgetData);
	////				}
	//			})
	//			.catch(error => {
	//			})
	//	}
	}

	function onTabDeleted(id: number) {
//		setTabs(tabs.filter(tab => tab.id !== id))
	//	if (activeTab === id.toString()) {
//			dispatch(toggleSelectedTab(tabs[0].id.toString()))
	//	}
	}

	useEffect(initDashboard, []);

	return (
		<View style={styles.dash}>
			<div className="dash">
				<div className='flexRow'>
					<div className='flexColumn tabsBar'>
							{
								tabs.map((tab: ITab) => {
									return (
										<div  key={tab.id.toString()} >{tab.label}</div>
									)
								})
							}
							
					</div>
					test
				</div>
			</div>
		</View>
	);
}

const styles = StyleSheet.create({
	dash: {
		width: "100%",
	},
	dashNavbar: {
		textAlign: "center",
		minWidth: "5vw",
		backgroundColor: "black",
		minHeight: "100vh"
	},
	dashNavbarLink: {
		margin: "10px"
	}
  });
