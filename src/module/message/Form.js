import { useEffect, useState } from "react"

const EMPTY_STATE = {
    idMessage: '',
    messageText: '',
    client: {
        idClient: "0"
    },
    boat: {
        id: "0"
    }
};

export default function Form({ data, submit, clients, boats, onClear }) {
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

    const onClientChange = (event) => {
        const value = event.target.value
        setState(currentState => ({ ...currentState, client: { idClient: value } }));
    }

    const onBoatChange = (event) => {
        const value = event.target.value
        setState(currentState => ({ ...currentState, boat: { id: value } }));
    }

    useEffect(() => {
        if (data && !!data.idMessage && data.idMessage !== state.idMessage) {
            setState(data);
            return;
        }
        setState(EMPTY_STATE);
    }, [data])

    return (<form>
        <input className="form-control mb-2" placeholder="id" disabled value={state.idMessage} readOnly />
        <input className="form-control mb-2" placeholder="Message Text" value={state.messageText?.toString()} onChange={event => onChange(event, "messageText")} />
        <select className="form-control mb-2" name="Client" id="category-select" value={state.client?.idClient?.toString()} onChange={onClientChange}>
            <option value="">--Please choose a client--</option>
            {clients.map(client => (<option key={client.idClient} value={client.idClient}>{client.name}</option>))}
        </select>
        <select className="form-control mb-2" name="Boat" id="boat-select" value={state.boat?.id?.toString()} onChange={onBoatChange}>
            <option value="">--Please choose a boat--</option>
            {boats.map(boat => (<option key={boat.id} value={boat.id}>{boat.name}</option>))}
        </select>

        <div className="d-flex justify-content-end">
        <button className="btn btn-pimary" type="button" onClick={onClick}>{(!state || state.id === "") ? "Save" : "Update"}</button>
        <button className="btn btn-secondary" type="button" onClick={() => onClear()}>Clear</button>
        </div>
        
    </form>)
}