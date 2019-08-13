import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	const isAdmin = localStorage.typeUser;
	let menuListContacts;

	if (isAdmin==='true') {
		menuListContacts = <Link to="/listContacts">Listar contatos|</Link>;
	} else {
		menuListContacts = '';
	}

	console.log()
		return (
			<div className='NavBar'>
				<Link to="/">Home|</Link>
				{props.currentUser
					? (
						<span>
							{menuListContacts}
							<Link to="/newContact">Entrar em contato|</Link>
							<Link to="/logout">Deslogar|</Link>
						</span>
					)
					: (
						<span>
							<Link to="/login">Login|</Link>
						</span>
					)
				}
			</div>
		)
}

export default NavBar