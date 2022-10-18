export default function ({ data, onEdit, onDelete, clients, boats }) {
    return (<table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Message Text</th>
                <th>Client</th>
                <th>Boat</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((el, i) => (
                    <tr key={i}>
                        <td>{el.idMessage}</td>
                        <td>{el.messageText}</td>
                        <td>{clients[el.client.idClient]?.name}</td>
                        <td>{boats[el.boat.id]?.name}</td>
                        <td>
                            <i onClick={() => onEdit(el)} class="fa-solid trigger fa-pen-to-square me-4"></i>
                            <i onClick={() => onDelete(el)} class="fa-solid trigger fa-trash"></i>
                        </td>
                    </tr>
                ))}
        </tbody>


    </table>)
}