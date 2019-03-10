import { useState } from 'react';

export default function useUid() {
    const [uid, updateUid] = useState(Date.now());

    return [
        uid,
        () => updateUid(Date.now())
    ];
}
