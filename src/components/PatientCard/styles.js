import styled from "styled-components";

export const StyledCardDiv = styled.div`

    width: 90%;
    background-color: #bdd6ee;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px 10px 0px;

    h3 {
        margin: 10px;
        border-bottom: 1px solid black;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 10px;

        p {
            margin: 5px;
        }

        .cardHeader {
            display: flex;
            flex-direction: row; 
            align-items: center;
            margin: 0px;

            .edit {
                font-size: 30px;
            }
        }
    }
`
