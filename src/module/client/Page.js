import React from "react"
import Loading from "../../components/Loading";
import Form from "./Form";
import List from "./List";
import { useEntity } from "../../hooks/entity";

const Page = () => {
    const { selected, submit, data, onEdit, onDelete, loading } = useEntity("http://localhost:8080/api/Client", "idClient");

    if (!data || loading) {
        return <Loading />
    }

    return (<>
        <h2 className="h2">Client</h2>
        <Form data={selected} submit={submit} onClear={() => onEdit(null)} />
        <hr />
        <List data={data} onEdit={onEdit} onDelete={onDelete} />
    </>)
}

export default Page;