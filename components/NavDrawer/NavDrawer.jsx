import React from 'react';
import '../../scss/main.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { TiHomeOutline } from 'react-icons/ti';
import { FiSpeaker, FiInbox, FiCalendar, FiTruck } from 'react-icons/fi';



function NavDrawer() {
	const [state, setState] = React.useState({ left: false });

	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return }
		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div className="nav_drawer" role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}>
			<List className="nav_drawer__list">

				<Link href='/'>
					<ListItem button key='Inicio'>
						<ListItemIcon>
							<TiHomeOutline size='2rem' />
						</ListItemIcon>
						<ListItemText>
							<a className="nav_drawer__list--link"> Inicio </a>
						</ListItemText>
					</ListItem>
				</Link>

				<Link href='/equipo'>
					<ListItem button key='FiSpeaker'>
						<ListItemIcon>
							<FiSpeaker size='2rem' />
						</ListItemIcon>
						<ListItemText >
							<a className="nav_drawer__list--link">Equipo</a>
						</ListItemText>
					</ListItem>
				</Link>

				<Link href='/contacto'>
					<ListItem button key='FiInbox'>
						<ListItemIcon>
							<FiInbox size='2rem' />
						</ListItemIcon>
						<ListItemText>
							<a className="nav_drawer__list--link">Contacto</a>
						</ListItemText>
					</ListItem>
				</Link>
			</List>

			<Divider />

			<List>
				<Link href='/calendar'>
					<ListItem button key='FiCalendar'>
						<ListItemIcon>
							<FiCalendar size='2rem' />
						</ListItemIcon>
						<ListItemText >
							<a className="nav_drawer__list--link">Calendario</a>
						</ListItemText>
					</ListItem>
				</Link>

				<Link href='/events'>
					<ListItem button key='events'>
						<ListItemIcon>
							<FiTruck size='2rem' />
						</ListItemIcon>
						<ListItemText>
							<a className="nav_drawer__list--link">Eventos</a>
						</ListItemText>
					</ListItem>
				</Link>


				<Link href='/login'>
					<ListItem button key='admin'>
						<ListItemIcon>
							
						</ListItemIcon>
						<ListItemText>
							<a className="nav_drawer__list--link">Login</a>
						</ListItemText>
					</ListItem>
				</Link>

			</List>
		</div>
	);




	return (
		<nav style={{ position: "absolute", zIndex: '5', width: '15rem' }}>
			<Button onClick={toggleDrawer('left', true)} style={{ marginTop: '2rem' }}>
				<img src="../../static/icons/menu_points.png" style={{ height: '3rem'}}></img>
			</Button>
			<Drawer open={state.left} onClose={toggleDrawer('left', false)} style={{ width: '5rem' }}>
				{sideList('left')}
			</Drawer>

		</nav>
	);


}


export default NavDrawer;