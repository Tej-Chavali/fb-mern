import { Avatar, Input } from '@material-ui/core'
import './MessageSender.css';
import React ,{ useState }from 'react'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

const MessageSender = () => {
    const[input,setInput] = useState('')
    const[image,setImage] =useState(null)

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('handle Submitting');
    }


    return(
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar src={'https://s.clipartkey.com/mpngs/s/172-1729893_computer-icons-female-user-profile-avatar-material-user.png'} />
                <form>
                    <input type='text' className='message_input' placeholder="What's on your mind?" value={input} onChange={() => {}} />
                    <Input type="file" className='message_file' onChange={handleChange} />
                    <button onClick={handleSubmit} type='submit'>HiddenSubmit</button>
                </form>
            </div>
            <div className='messageSender_bottom'>
                <div className='message_option'>
                    <VideocamIcon style={{color:'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className='message_option'>
                    <PhotoLibraryIcon style={{color:'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='message_option'>
                    <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}
export default MessageSender