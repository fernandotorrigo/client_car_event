import React from 'react'
import httpClient from '../httpClient'

class NewContact extends React.Component {
	state = {
		fields: { name: '', email: '', phone: '', description: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.newContact(this.state.fields).then(contact => {
			this.setState({ fields: { name: '', email: '', phone: '', description: ''} })
			if(contact) {
				this.props.onNewContactSuccess(contact)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { name, email, phone, description } = this.state.fields
		return (
			<div className='NewContact'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Contato</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Name" name="name" value={name} required/>
							<input type="email" placeholder="Email" name="email" value={email} required/>
							<input type="text" placeholder="Telefone" name="phone" value={phone} required/>
							<textarea name="description" value={description} required/>
							<button>Enviar</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default NewContact