import {
    useState,
    useCallback
} from 'react';

export default function useEventUid() {
    const [eventData, set] = useState({});
    const updateEvent = useCallback(type => set({
        type,
        uid: Date.now()
    }));

    return [
        eventData,
        updateEvent
    ];
}
