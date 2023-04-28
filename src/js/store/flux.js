const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactList: [
				{
					name: "Santi Mendez",
					email: "santi@gmail.com",
					phone: "633100200",
					address: "Cardedeu"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			//Función crear contacto
			 agregarContacto: (name, email, phone, address)=> {
				// const demo = getStore().contactList.concat.({name, email, phone, address})
			 	setStore({contactList: getStore().contactList.concat.({name, email, phone, address})});
				console.log (getStore());
			 }
		}
	};
};

export default getState;
