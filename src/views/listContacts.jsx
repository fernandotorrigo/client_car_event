import React, { Component } from 'react'
import api from '../api'
import moment from 'moment';

export default class Main extends Component {
	state = {
		contacts: []
	}

	componentDidMount(){
		this.loadContacts();
	}
	
	loadContacts = async () => {
		
		const config = {
			headers: {'Authorization': "Bearer " + localStorage.token}
		};
	
		const response = await api.get("/contacts", config)
		this.setState({ contacts: response.data})
	}

	render(){
		return (
			<table className="table">
			<thead>
			  <tr>
				<th scope="col">Nome</th>
				<th scope="col">E-mail</th>
				<th scope="col">Telefone</th>
				<th scope="col">Mensagem</th>
				<th scope="col">Data</th>
			  </tr>
			</thead>
			<tbody>
			{this.state.contacts.map(contact => (
				<tr key={contact._id}>
					<td>{contact.name}</td>
					<td>{contact.email}</td>
					<td>{contact.phone}</td>
					<td>{contact.description}</td>
					<td>{moment(contact.createdAt).format("YYYY-MM-DD HH:mm")}</td>
				</tr>
			))}
			</tbody>
			</table>
		)
	}
}