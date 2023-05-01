import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Context);
	// console.log(store.contactList);

	useEffect(() => {
		//useEffect funciona como onload y ejecuta el codigo que tiene dentro ni bien se carga el componente
		actions.obtenerContactos();
		console.log(store.contactList);
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactList.map((item, index) => (
							<ContactCard
								name={item.full_name} //es el nombre del campo en la BBDD
								key={index}
								email={item.email}
								phone={item.phone}
								address={item.address}
								id={item.id}
								onDelete={() => setState({ showModal: true })}
							/>
						))}
						{/* <ContactCard onDelete={() => setState({ showModal: true })} />
						<ContactCard />
						<ContactCard />
						<ContactCard /> */}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
