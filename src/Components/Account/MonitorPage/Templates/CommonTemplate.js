import React, { useState, useEffect, useMemo } from 'react';
import { DateTime } from './Modules/DateTime.js';
import Text from './Modules/TextRow/Text.js';
import Table from './Modules/Table/Column.js';
import PopUpCreateTemplate from '../PopUp/PopUpCreateTemplate.js';
import { useStores } from '../../../../Store/MainStore.js';
import { useObserver } from 'mobx-react';
import CreateTemplate from './CreateTemplate.js';
import AddButton from './Modules/AddButton.js';
import Changer from './Modules/Changer.js';
export default function CommonTemplate() {
    const { TemplateStore } = useStores()
    const [isOpen, setIsOpen] = useState(false)
    const [redactState, setRedactState] = useState(0)

    function states() {
        switch (TemplateStore.getState) {
            case 1:
                return (<CreateTemplate/>)
            case 2:
                return (<Text/>)
            case 3:
                return (<Text/>)
        }
    }

    return useObserver(() =>
        <div className="flex flex-col">
            {

                TemplateStore.getState === 0 ? !isOpen ? <AddButton event={setIsOpen}/> : <PopUpCreateTemplate isOpen={isOpen} setIsOpen={setIsOpen} /> : states()
            }
        </div>
    )
}