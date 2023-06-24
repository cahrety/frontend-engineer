import styled from "styled-components";

const StyledNavbar = styled.div`
background-color: #BAD7E9;
    padding: 1rem;
    color: #FCFFE7;

    nav {
        display: flex;
    flex-direction: column;
    }

    h2 {
        font-size: 2.4rem;
    margin-bottom: 1rem;
    font-family: 'Rubik';
    }

    ul {
        display: flex;
    flex-direction: column;
    list-style: none;
    }

    li {
        margin-bottom: 1rem;
    font-family: 'Rubik';
    }

    a {
        text-decoration: none;
    color: #fff;
    }

    @media (min-width: 768px) {
    nav {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        margin-bottom: 0;
    }

    ul {
        flex-direction: row;
    }

    li {
        margin: 0 1rem;
    }
}
`;



export default StyledNavbar;