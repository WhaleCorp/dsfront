import { useState, useEffect } from "react";
export function DateTime() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className="bg-amber-300 flex justify-around">
            <div>
                <p>
                    {' '}
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </p>
            </div>
            <div>
                <p>
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </p>
            </div>
            <div>
                <p>
                    {dateState.toLocaleDateString('en-US', { weekday: 'long' })}
                </p>
            </div>
        </div>
    )
}