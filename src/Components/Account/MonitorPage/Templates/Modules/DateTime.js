import { useState, useEffect } from "react";
import useLongPress from "../../../../../Helpers/UseLongPress";
import { useStores } from "../../../../../Store/MainStore";
export function DateTime() {
    const { ChangerStore } = useStores()
    const [dateState, setDateState] = useState(new Date());
    const change = useLongPress({ onLongPress: (ev) => ChangerStore.setObject(ev.target) })

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div id="date" className="underline flex justify-around" {...change}>
            <p>
                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
            </p>
            <p>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </p>
            <p>
                {dateState.toLocaleDateString('en-US', { weekday: 'long' })}
            </p>
        </div>
    )
}