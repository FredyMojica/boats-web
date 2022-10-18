import React from "react"
import Loading from "../../components/Loading";
import Form from "./Form";
import List from "./List";
import { useEntity } from "../../hooks/entity";
import { useQuery } from "../../hooks/query";

const Page = () => {
    const { selected, submit, data, onEdit, onDelete, loading } = useEntity("http://localhost:8080/api/Reservation", "idReservation");
    const { data: clients = [] } = useQuery("http://localhost:8080/api/Client/all");
    const { data: boats = [] } = useQuery("http://localhost:8080/api/Boat/all");

    const mappedClients = (clients || []).reduce((obj, entity) => ({...obj, [entity.idClient]: entity}), {})
    const mappedBoats = (boats || []).reduce((obj, entity) => ({...obj, [entity.id]: entity}), {})

    if (!data || loading) {
        return <Loading />
    }

    return (<>
        <h2 className="h2">Reservation</h2>
        <Form data={selected} submit={submit} clients={clients || []} boats={boats || []} onClear={() => onEdit(null)} />
        <hr />
        <List data={data} onEdit={onEdit} onDelete={onDelete} clients={mappedClients} boats={mappedBoats} />
    </>)
}

export default Page;