import * as React from 'react';
import { WidgetTypes } from '../../enums/WidgetsEnum';

interface IProps {
    onWidgetAdded: (type: any) => void;
}

const Store: React.FunctionComponent<IProps> = props => {
    return (
        <div className='flexRow'>
            {
                Object.keys(WidgetTypes).map((key) => {
                    return (
                        <div></div>
                    )
                })
            }
        </div>
    )
}

export default Store;