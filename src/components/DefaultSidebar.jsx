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

export function DefaultSidebar() {
  return (
    <Card className="h-auto
    w-[20rem] p-4 rounded-none shadow-none hidden
     shadow-blue-gray-900/5 lg:block">
      {/* <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Pitch Hackaton
        </Typography>
      </div> */}
     <ListSidebarMenu />
    </Card>
  );
}
