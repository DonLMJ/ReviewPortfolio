import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #8063FF;
    margin-top: -40px;

    @media screen and (max-width: 768px) {
        height: 1100px;
        margin-top: -40px;
    }

    @media screen and (max-width: 480px) {
        height: 20000px;
        margin-top: 400px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 40px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.08);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 40px;
    width: 60px;
    margin-bottom: 10px;
    margin-right: 180px;
`

export const PasswordsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 50px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
         margin-bottom: 200px;
    }
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-top: -40px;
    margin-left: 40px;
    margin-top: -60px;
`
