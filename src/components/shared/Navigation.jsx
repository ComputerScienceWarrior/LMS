import React from "react";
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Navigation = (props) => {
    return(
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'} backgroundColor={'red'} paddingTop={'3'} paddingBottom={'3'}>
            <ul className="" style={{display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none'}}>
                <li><Link style={{textDecoration: 'none', textColor: 'white'}} to="/">Home</Link></li>
                <li><Link style={{textDecoration: 'none', textColor: 'white'}} to="/about_us">About Us</Link></li>
            </ul>
        </Box>
    )
}

export default Navigation;
