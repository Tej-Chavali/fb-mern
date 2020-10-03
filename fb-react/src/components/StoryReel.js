import React from 'react'
import Story from './Story'
import './StoryReel.css'
const StroyReel = () => {
    return(
        <div className='storyReel'>
            <Story 
            image ='https://images-na.ssl-images-amazon.com/images/I/61M5Zy%2BNmVL.jpg'
            profileSrc = 'https://s.clipartkey.com/mpngs/s/172-1729893_computer-icons-female-user-profile-avatar-material-user.png'
            title = 'Kamakshi'
             />
              <Story 
            image ='https://images.unsplash.com/photo-1466838931486-92f3b5ff31a6?ixlib=rb-1.2.1&w=1000&q=80'
            profileSrc = 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg'
            title = 'Shankara'
             />
             <Story 
            image ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrZtAQad2AwGE-tCerYRb6QGkxpq9CiFi1AQ&usqp=CAU'
            profileSrc = 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png'
            title = 'Mahadev'
             />
            
        </div>
    )
}
export default StroyReel