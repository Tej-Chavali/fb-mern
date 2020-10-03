import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import NearMe from '@material-ui/icons/NearMe'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import AccountCircleICon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

const Post = ({profilePic, message, timestamp, imgName, username}) => {
    return(
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar' />
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                    {/* Image coming later */}
                 
                </div>
            </div>
            <div className='post_bottom'>
                <p>{message}</p>
            </div>

            <div className='post_options'>
                        <div className='post_option'>
                            <ThumbUpIcon />
                            <p>Like</p>
                        </div>
                        <div className='post_option'>
                            <ChatBubbleOutlineIcon />
                            <p>Comment</p>
                        </div>
                        <div className='post_option'>
                            <NearMe />
                            <p>Share</p>
                        </div>
                        <div className='post_option'>
                            <AccountCircleICon />
                            <ExpandMoreOutlined />
                        </div>
                    </div>
        </div>
    )
}
export default Post