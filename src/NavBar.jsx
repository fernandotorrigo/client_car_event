import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	console.log(localStorage.typeUser)
	if(localStorage.typeUser!==null){
		return (
			<div className='NavBar'>
				<Link to="/">Home|</Link>
				{props.currentUser
					? (
						<span>
							<Link to="/listContacts">Listar contatos|</Link>
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
	}else{
		return (
			<div className='NavBar'>
				<Link to="/">Home|</Link>
				{props.currentUser
					? (
						<span>
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

}

export default NavBar