export default function ({ data, onEdit, onDelete }) {
    return (<table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((el, i) => (
                    <tr key={i}>
                        <td>{el.idClient}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.age}</td>
                        <td>
                            <i onClick={() => onEdit(el)} class="fa-solid trigger fa-pen-to-square me-4"></i>
                            <i onClick={() => onDelete(el)} class="fa-solid trigger fa-trash"></i>
                        </td>
                    </tr>
                ))}
        </tbody>


    </table>)
}