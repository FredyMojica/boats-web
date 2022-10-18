export default function ({ data, onEdit, onDelete, categories }) {
    return (<table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Brand</th>
                <th>Year</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((el, i) => (
                    <tr key={i}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.description}</td>
                        <td>{el.brand}</td>
                        <td>{el.year}</td>
                        <td>{categories[el.category.id]?.name}</td>
                        <td>
                            <i onClick={() => onEdit(el)} class="fa-solid trigger fa-pen-to-square me-4"></i>
                            <i onClick={() => onDelete(el)} class="fa-solid trigger fa-trash"></i>
                        </td>
                    </tr>
                ))}
        </tbody>


    </table>)
}