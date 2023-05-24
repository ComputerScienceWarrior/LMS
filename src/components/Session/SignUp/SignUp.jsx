import React, { useState } from "react";
import { Button, Input, Text, Center } from '@chakra-ui/react'

const SignUp = (props) => {
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            'firstName': firstName,
            'username': username,
            'email': email,
            'password': password,
            'confirmPassword': confirmPassword
        };
    }

    return(
        <Center display={'flex'} flexDirection={'column'}>
            <Text>Sign Up Below</Text>
            <Input marginBottom={'5'} style={{width: 300}} type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <Input marginBottom={'5'} style={{width: 300}}  type="text" placeholder="Create a Username Name" value={username} onChange={e => setUsername(e.target.value)} />
            <Input marginBottom={'5'} style={{width: 300}}  type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input marginBottom={'5'} style={{width: 300}}  type="password" placeholder="Create a Password" value={password} onChange={e => setPassword(e.target.value)} />
            <Input marginBottom={'5'} style={{width: 300}}  type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <Button onClick={handleSubmit} colorScheme="green" variant={'outline'} style={{width: 300}} >Submit</Button>
        </Center>
    )
}

export default SignUp;
