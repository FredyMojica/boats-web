import React from "react"
import Loading from "../../components/Loading";
import Form from "./Form";
import List from "./List";
import { useEntity } from "../../hooks/entity";
import { useQuery } from "../../hooks/query";

const Page = () => {
    const { selected, submit, data, onEdit, onDelete, loading } = useEntity("http://localhost:8080/api/Boat");
    const { data: categories = [] } = useQuery("http://localhost:8080/api/Category/all");

    const mappedCategories = (categories || []).reduce((obj, entity) => ({...obj, [entity.id]: entity}), {})

    if (!data || loading) {
        return <Loading />
    }

    return (<>
        <h2 className="h2">Boat</h2>
        <Form data={selected} submit={submit} categories={categories || []} onClear={() => onEdit(null)} />
        <hr />
        <List data={data} onEdit={onEdit} onDelete={onDelete} categories={mappedCategories} />
    </>)
}

export default Page;