import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { WidgetTypes } from '../enums/WidgetsEnum';
import { ITabState } from '../reducers/tabReducer';
import { deleteWidget } from '../services/WidgetService';
import { IWidgetConfig } from '../widgets/IWidgetConfig';
import WeatherWidget from '../widgets/weather/WeatherWidget';

interface IProps {
    tabId: number;
    newWidget: any;
}

export default function TabDash(props: IProps) {
    const [widgets, setWidgets] = useState([]);
    const activeTab = useSelector((state: ITabState) => state.activeTab);

    function createWidget(widgetConfig: IWidgetConfig) {
        switch (widgetConfig.type) {
            case WidgetTypes.WEATHER: {
                return <WeatherWidget id={widgetConfig.id} tabId={widgetConfig.tab.id} {...widgetConfig.data} onDeleteButtonClicked={deleteWidgetFromDashboard} />
            }
            default: {
                return;
            }
        }
    }

    function deleteWidgetFromDashboard(id: number) {
        deleteWidget(id)
            .then(response => {
                if (response) {
                    setWidgets(widgets.filter((widget: IWidgetConfig) => {
                        return widget.id !== id;
                    }))
                }
            })
            .catch((error: Error) => {
                // logger.error(error.message);
            })
    }

    useEffect(() => {
        if (!widgets.length && activeTab.toString() === props.tabId.toString()) {
            fetch(`${process.env.REACT_APP_BACKEND_URL || "https://dash-webservices.herokuapp.com"}/widget/?tabId=${props.tabId}`)
                .then((result) => {
                    return result.json();
                })
                .then(result => {
                    setWidgets(result);
                })
                .catch((error: Error) => {
                    //logger.error(error.message);
                });
        }
    }, [activeTab])

    useEffect(() => {
        if (props.newWidget) {
            setWidgets(((widgets as any[]).concat([props.newWidget])) as []);
        }
    }, [props.newWidget != null && props.newWidget.id])

    return (
            <div className='widgetList'>
                {
                    widgets &&
                    widgets.map((widgetConfig: IWidgetConfig) => {
                        return (
                            <div key={widgetConfig.id} className="widget">
                                {createWidget(widgetConfig)}
                            </div>
                        );
                    })
                }
            </div>
    )
}