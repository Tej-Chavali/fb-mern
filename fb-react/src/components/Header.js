import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreICon from '@material-ui/icons/ExpandMore'
import './Header.css'



const Header = () => {
    return (
        <div className = 'header'>
            <div className = "header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook logo"/>
            </div>
            <div className ="header_input">
                <SearchIcon />
                <input placeholder='Search Facebook' type="text" />
            </div>
            <div className="header_center">
                <div className="header_option header_option--active"><HomeIcon fontSize='large'/></div>
                <div className="header_option"><FlagIcon fontSize='large'/></div>
                <div className="header_option"><SubscriptionsOutlinedIcon fontSize='large'/></div>
                <div className="header_option"><StorefrontOutlinedIcon fontSize='large'/></div>
                <div className="header_option"><SupervisedUserCircle fontSize='large'/></div>
             </div>
             <div className ="header_right">
                 <div className='header_info'>
                     <Avatar />
                     <h4>Kamakshi</h4>
                 </div>
                <IconButton> <AddIcon /> </IconButton>
                <IconButton> <ForumIcon /> </IconButton>
                <IconButton> <NotificationsActiveIcon /> </IconButton>
                <IconButton> <ExpandMoreICon /> </IconButton>
             </div>

        </div>
    )
}
export default Header