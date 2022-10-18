import { useEffect, useState } from "react";
import axios from "axios";

export function useQuery(url) {
    const [state, setState] = useState({ data: null, loading: false, error: false });
    const refresh = () => {
        setState(state => ({ ...state, loading: true }))
        axios.get(url)
            .then(res => setState({ data: res.data, loading: false }));
    }

    useEffect(() => {
        if (url) {
            refresh()
        }
    }, [])

    return { ...state, refresh };
}