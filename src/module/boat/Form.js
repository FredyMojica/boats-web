import { useEffect, useState } from "react"

const EMPTY_STATE = {
    id: '',
    name: '',
    description: '',
    brand: '',
    year: 0,
    category: {
        id: 0
    }
};

export default function Form({ data, submit, categories, onClear }) {
    const [state, setState] = useState(EMPTY_STATE);
    const onChange = (event, field) => {
        const value = event.target.value
        setState(currentState => ({ ...currentState, [field]: value }));
    }

    const onClick = event => {
        event.preventDefault()
        submit(state)
        setState(EMPTY_STATE)
    }

    const onCategoryChange = (event) => {
        const value = event.target.value
        setState(currentState => ({ ...currentState, category: { id: value } }));
    }

    useEffect(() => {
        if (data && !!data.id && data.id !== state.id) {
            setState(data);
            return;
        }
        setState(EMPTY_STATE);
    }, [data])

    return (<form>
        <input className="form-control mb-2" placeholder="id" disabled value={state.id} readOnly />
        <input className="form-control mb-2" placeholder="name" value={state.name} onChange={event => onChange(event, "name")} />
        <input className="form-control mb-2" placeholder="description" value={state.description} onChange={event => onChange(event, "description")} />
        <input className="form-control mb-2" placeholder="brand" value={state.brand} onChange={event => onChange(event, "brand")} />
        <input className="form-control mb-2" placeholder="year" value={state.year || ''} onChange={event => onChange(event, "year")} />
        <select className="form-control mb-2" name="Category" id="category-select" value={state.category.id} onChange={onCategoryChange}>
            <option value="">--Please choose a category--</option>
            {categories.map(category => (<option key={category.id} value={category.id}>{category.name}</option>))}
        </select>

        <div className="d-flex justify-content-end">
            <button className="btn btn-pimary" type="button" onClick={onClick}>{(!state || state.id === "") ? "Save" : "Update"}</button>
            <button className="btn btn-secondary" type="button" onClick={() => onClear()}>Clear</button>
        </div>
    </form>)
}