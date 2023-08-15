import React, { useState, useEffect, useMemo } from 'react';
import { DateTime } from './Modules/DateTime.js';
import Text from './Modules/Text.js';
import Table from './Modules/Table.js';
import { useObserver } from 'mobx-react';
import { useStores } from '../../../../Store/MainStore'
export default function CommonTemplate() {
    const { TemplateStore } = useStores()
    const [header, setHeader] = useState("")
    const [removeTableId, setRemoveTableId] = useState()
    const [table, setTable] = useState([])


    function addCol() {
       
    }

    useEffect(() => {
        setTable(table.filter(e => e !== removeTableId))
    }, [removeTableId])

    return useObserver(() => (
        <div className="bg-orange-900 flex flex-col">
            <div className="flex justify-around bg-white">
                <button onClick={addCol} className="border-2 w-[25%]">Add Col</button>
            </div>
            <div>
                <Text textValue={setHeader} />
                <DateTime />
                <div className="flex py-2">
                    {
                        table.map((element, key) => {
                            return <Table key={key} id={key} setRemoveTableId={setRemoveTableId} />
                        })

                    }
                </div>
            </div>
        </div>
    ))
}