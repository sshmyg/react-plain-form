import { useState } from 'react';

export default function useEventUid() {
    const [eventData, set] = useState({});

    return [
        eventData,
        type => {
            set({
                type,
                uid: Date.now()
            });
        }
    ];
}
