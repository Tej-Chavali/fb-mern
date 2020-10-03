import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return(
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post  
            profilePic='https://s.clipartkey.com/mpngs/s/172-1729893_computer-icons-female-user-profile-avatar-material-user.png'
            message='yoo this is msg'
            timestamp='time'
            imgName='imagename'
            username='Kamakshi'
            />
        </div>
    )
}
export default Feed