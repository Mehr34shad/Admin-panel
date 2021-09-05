import React from 'react';
import { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from 'react-redux';
import { CreateNewUser } from '../../actions/users';

const newUserDialog = ({ showDialog, closeDialog }) => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();

        const dispatch = useDispatch()


    const handleSubmit = event => {
        event.preventDefault()

        try {
            let data = new FormData();

            data.append("id", Number.parseInt(id));
            data.append("name", name);
            data.append("surname", surname);
            data.append("email", email);

            //Dispatch
            dispatch(CreateNewUser(data))
            closeDialog();

        }
        catch (ex) {
            console.log(ex)
        }
    }


    return (
        <DialogOverlay isOpen={showDialog} onDismiss={closeDialog}
            style={{ background: "hsla(0,100%,100%,0.9)" }} >
            <DialogContent style={{
                border: "solid 5px hsla(0,0%,0%,0.5) ",
                borderRadius: "10px",
                boxShadow: "0px 10px 50px hsla(0,0%,0%,0.33)"

            }}>

                <div className="inner form-layer" >
                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            name="id"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="id"
                            aria-describedby="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <input
                            type="text"
                            name="name"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="name"
                            aria-describedby="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="surname"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="surname"
                            aria-describedby="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="email"
                            aria-describedby="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-success"
                            style={{ margin: "1em" }}>
                            Add person
                        </button>
                        <button
                            className="btn btn-warning mr-5"
                            style={{ margin: "1em" }}
                            onClick={closeDialog}
                        >
                            Cancel
                        </button>

                    </form>


                </div>


            </DialogContent>

        </DialogOverlay>

    );
}

export default newUserDialog;