import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;    
    flex-direction: column;
    align-items: center; 
    width: 100vw;
    height: 100vh;
    
    

    .tableDiv {
        .tableContent ,.tableHeader {
            list-style: none;
            margin: 0px;
            padding: 0px;
            display: flex;
            justify-content: space-around;
        }
        
        .tableHeader li{
            margin: 0px 20px 5px 20px;
        }
    }

    .dataSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .mainDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px) {
            flex-direction: row; 
            margin: 50px 0px 0px 50px;
        }

        @media screen and (min-width: 1024px) {
            margin: 50px 0px 0px 150px;
        }

        @media screen and (min-width: 1440px) {
            margin: 50px 0px 0px 350px;
        }
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;


        @media screen and (min-width: 768px) {
            margin: 0px 0px 0px 100px;
        }

        @media screen and (min-width: 1024px) {
            margin: 150px 0px 0px 250px;
        }

        @media screen and (min-width: 1440px) {
            margin: 150px 0px 0px 300px;
        }
    }


    @media screen and (min-width: 768px) {
        align-items: flex-start; 
        flex-direction: row

    }

`