const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactList: [{}]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			//Función crear contacto
			agregarContacto: (name, email, phone, address, id) => {
				let data = {
					full_name: name,
					address: address,
					phone: phone,
					email: email,
					agenda_slug: "santiml",
					id: id
				};

				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
				// const demo = getStore().contactList.concat.({name, email, phone, address})
				// setStore({ contactList: getStore().contactList.concat({ name, email, phone, address }) });
				// console.log(getStore());
			},
			borrarContacto: (id) => {


				fetch("https://assets.breatheco.de/apis/fake/contact/"+{id}, {
					method: "DELETE",
					body: JSON.stringify(id),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				})
					.then(response => response.json())
					.then(id => console.log(id))
					.catch(err => console.log(err));
			},
			obtenerContactos: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/santiml")
					.then(response => response.json()) // convierto la respuesta en un json
					.then(data =>
						setStore({
							contactList: data
						})
					) // guardo la info en un objeto
					.catch(err => console.log("Request Failed", err));
			}
		}
	};
};

export default getState;
