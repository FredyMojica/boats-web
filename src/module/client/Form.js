import { useEffect, useState } from "react"

const EMPTY_STATE = { idClient: '', name: '', email: '', description: '', age: '' };

export default function Form({ data, submit, onClear }) {
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

    useEffect(() => {
        if (data && !!data.idClient && data.idClient !== state.idClient) {
            setState(data);
            return;
        }
        setState(EMPTY_STATE);
    }, [data])

    return (<form>
        <input className="form-control mb-2" placeholder="id" disabled value={state.idClient} readOnly />
        <input className="form-control mb-2" placeholder="name" value={state.name} onChange={event => onChange(event, "name")} />
        <input className="form-control mb-2" placeholder="Email" value={state.email} onChange={event => onChange(event, "email")} />
        <input className="form-control mb-2" placeholder="Age" value={(state.age || '')?.toString()} onChange={event => onChange(event, "age")} />

        <div className="d-flex justify-content-end">
            <button className="btn btn-pimary" type="button" onClick={onClick}>{(!state || state.idClient === "") ? "Save" : "Update"}</button>
            <button className="btn btn-secondary" type="button" onClick={() => onClear()}>Clear</button>
        </div>
    </form>)
}