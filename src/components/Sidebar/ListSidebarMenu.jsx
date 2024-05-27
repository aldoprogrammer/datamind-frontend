import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faCog, faInbox, faPowerOff, faShoppingBag, faUserCircle, faMagic } from '@fortawesome/free-solid-svg-icons'
import { Chip, List, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const ListSidebarMenu = () => {
    return (
        <List>
            <Link to='/dashboard'>
                <ListItem>
                    <ListItemPrefix>
                        <FontAwesomeIcon icon={faChartBar} className="h-5 w-5" />
                    </ListItemPrefix>
                    Catalog
                </ListItem>
            </Link>
            <Link to='/customers'>
            <ListItem>
                <ListItemPrefix>
                    <FontAwesomeIcon icon={faUserCircle} className="h-5 w-5" />
                </ListItemPrefix>
                Customers
            </ListItem>
            </Link>
            <ListItem>
                <ListItemPrefix>
                    <FontAwesomeIcon icon={faShoppingBag} className="h-5 w-5" />
                </ListItemPrefix>
                E-Commerce
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <FontAwesomeIcon icon={faInbox} className="h-5 w-5" />
                </ListItemPrefix>
                Order
                <ListItemSuffix>
                    <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                </ListItemSuffix>
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <FontAwesomeIcon icon={faCog} className="h-5 w-5" />
                </ListItemPrefix>
                Subscription
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <FontAwesomeIcon icon={faPowerOff} className="h-5 w-5" />
                </ListItemPrefix>
                Appointments
            </ListItem>
        </List>
    )
}

export default ListSidebarMenu
