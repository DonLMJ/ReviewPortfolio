import React, { useState, useEffect}  from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/svg-4.svg';
import Icon5 from '../../images/svg-5.svg';
import Icon6 from '../../images/svg-6.svg';
import Icon7 from '../../images/svg-7.svg';
import Icon8 from '../../images/svg-8.svg';
import Icon9 from '../../images/svg-9.svg';
import Axios from 'axios';
import {ServicesContainer, PasswordsH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './PasswordsElements';

const Passwords = () => {
    //state for array of passwords
    const [passwordList, setPasswordList] = useState([]);

    // function to decrypt the passwords by passing password encrypted and iv 
    const decryptPassword = (encryption) => {
        Axios.post("http://localhost:3306/decryptpassword", {
          password: encryption.password,
          iv: encryption.iv,
        }).then((response) => {
          setPasswordList(
            passwordList.map((val) => {
              return val.id === encryption.id
                ? {
                    id: val.id,
                    password: val.password,
                    title: response.data,
                    iv: val.iv,
                  }
                : val;
            })
          );
        });
      };
      //hoock to call just when the page refresh not when a state change of course
      //after the data is received with the promise get the data
      useEffect(() => {
        Axios.get("http://localhost:3306/showpasswords").then((response) => {
          setPasswordList(response.data);
        });
      }, []);

    return (
        <ServicesContainer id="passwords">
            <PasswordsH1>My Recent Passwords</PasswordsH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+12) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+11 ) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+10) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>                    
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4} />
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+9 ) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon5} />
                        
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+8) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon6} />
                        
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+7) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon7} />
                        
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+6) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon8} />
                        
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+5) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon9} />
                        
                            <ServicesH2>
                            {passwordList.map((val, key, passwordList) => {
                            if(val.id === passwordList.length+4) {
                            return (
                            <div
                            onClick={() => {
                                decryptPassword({
                                    password: val.password,
                                    iv: val.iv,
                                    id: val.id,
                                });
                            }}
                            key={key}
                            >
                        <h3>{val.title}</h3>
                            </div>
                            );
                            }})}
                            </ServicesH2>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>

    
    )
}

export default Passwords;
