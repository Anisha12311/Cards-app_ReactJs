import React from 'react' 
import './Social.css'


import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';

import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LanguageIcon from '@material-ui/icons/Language';
const Social = () => {
    return (
        <div className = "Social_follow" >  
        <h1>  Follow Us </h1>
 <div className = "Social_icon" > 

<Link href="http://www.google.com" target="_blank"  style = {{marginLeft : '70px',color :'#FF5722'}}>

    <EmailIcon className = "icon_link"/>
</Link>

<Link href="http://www.google.com" target="_blank"  style = {{marginLeft : '70px',color :'#757575'}}>
    <LocationOnIcon className = "icon_link" />
</Link>




<Link href="http://www.google.com" target="_blank"  style = {{marginLeft : '70px',color :'red'}}>
  
    <YouTubeIcon className = "icon_link"/>
</Link>


<Link href="http://www.google.com" target="_blank"  style = {{marginLeft : '70px', color : '#039BE5'}}>
    <FacebookIcon className = "icon_link"/>
</Link>


<Link href="http://www.google.com" target="_blank" style = {{marginLeft : '70px',color :'#F06292'}} >
    < InstagramIcon className = "icon_link"/>
</Link>

<Link href="http://www.google.com" target="_blank" style = {{marginLeft : '70px',color :'#795548'}} >
    < LanguageIcon className = "icon_link" />
</Link>


<Link href="https://api.whatsapp.com/send?phone=+917814244875&text=Hi" target="_blank"  style = {{marginLeft : '70px',color :'#4CAF50'}}>
    <WhatsAppIcon className = "icon_link" />
</Link>
        </div>
        </div>
    );
};
export default Social