import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
import { faChartBar, faShoppingBag, faInbox, faUserCircle, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListSidebarMenu from "./Sidebar/ListSidebarMenu";

export function SidebarMobile() {
  return (
    <Card className="h-auto
     p-4 rounded-none shadow-xl
     shadow-blue-gray-900/5 lg:block w-full">
      {/* <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Pitch Hackaton
        </Typography>
      </div> */}
     <ListSidebarMenu />
    </Card>
  );
}
