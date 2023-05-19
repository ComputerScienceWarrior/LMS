import React from "react";
import { Link } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'

const Navigation = (props) => {
    return(
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'} backgroundColor={'black'} paddingTop={'3'} paddingBottom={'3'} fontSize={'xl'}>
            <ul className="" style={{display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none'}}>
                <li><Link to="/"><Text textColor={'white'}>Home</Text></Link></li>
                <li><Link to="/about_us"><Text textColor={'white'}>About Us</Text></Link></li>
                <li><Link to="/sign_up"><Text textColor={'white'}>Create An Account</Text></Link></li>
            </ul>
        </Box>
    )
}

export default Navigation;
