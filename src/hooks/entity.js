import React, { useState } from "react"
import axios from "axios";
import { useQuery } from "./query";

export function useEntity(baseUrl, id = "id") {
    const query = useQuery(`${baseUrl}/all`);
    const { refresh } = query;
    const [selected, setSelected] = useState(null);
    const submit = (entity) => {
        if (!!entity[id]) {
            axios.put(`${baseUrl}/update`, entity)
                .then(res => updateList());
            return;
        }

        axios.post(`${baseUrl}/save`, entity)
            .then(res => updateList());

    }
    
    const updateList = () => {
        setSelected(null)
        refresh()
    }

    const onEdit = entity => {
        setSelected(entity);
    }

    const onDelete = entity => {
        axios.delete(`${baseUrl}/${entity[id]}`)
            .then(() => updateList());
    }

    return { ...query, selected, submit, onEdit, onDelete };
}