import React, { useState, useEffect } from 'react';
//import Video from '../../videos/video.mp4';
import { HeroContainer, AddPwdH1, AddPwdContent, AddPwd, AddTitle, HeroBtnWrapper, ArrowForward, ArrowRight} from './AddPasswordElements';
import {Button} from '../ButtonElements';
import Axios from 'axios';

const AddPassword = () => {
    const [hover, setHover] = useState(false);
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [passwordList, setPasswordList] = useState([]);

    const onHover = () => {
        setHover(!hover);
    };

    const addPassword = () => {
        Axios.post("http://localhost:3306/addpassword", {
          password: password,
          title: title,
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3306/showpasswords").then((response) => {
          setPasswordList(response.data);
          console.log(response.data)
        });
    }, []);

    return (
        <HeroContainer>
            <AddPwdContent>
            <AddPwdH1>Add Password</AddPwdH1>
            
                <AddPwd>
                <input
                    type="text"
                    placeholder="Ex. password123"
                    onChange={(event) => {
                    setPassword(event.target.value);
                }}
                />
                </AddPwd>
                <AddTitle>
                <input
                    type="text"
                    placeholder="Ex. Facebook"
                    onChange={(event) => {
                    setTitle(event.target.value);
                }}
                />
                </AddTitle>
                <HeroBtnWrapper>
                    <Button 
                    onClick={addPassword}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    >
                        Add Password {hover ? <ArrowForward /> : <ArrowRight/>} </Button>
                </HeroBtnWrapper>
            </AddPwdContent>
        </HeroContainer>
    );
};

export default AddPassword;
