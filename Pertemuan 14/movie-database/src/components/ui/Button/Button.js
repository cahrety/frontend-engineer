import styled, { css } from "styled-components";

const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: white;
/* background-color: #EB455F; */
cursor: pointer;

// menangkap props variasi
background-color: ${function (props) {
        if (props.variasi) {
            return props.theme.colors[props.variasi];
        } else {
            return props.theme.colors["primary"]
        }
    }};

// mengatur ukuran button
${function (props) {
        return props.full && css`
    width: 95%;
    display: block;
    `
    }}

// menambahkan size props
${function (props) {
        if (props.size === "sm") {
            return css`
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    `;
        } else if (props.size === "md") {
            return css`
            padding: 0.5rem 1rem;
            font-size: 1rem;
            `;
        } else if (props.size === "lg") {
            return css`
            padding: 0.5rem 1rem;
            font-size: 1.3rem;
            `;
        } else {
            return css`
            padding: 0.5rem 1rem;
            font-size: 1rem;
        `}
    }}
`;


export default Button;