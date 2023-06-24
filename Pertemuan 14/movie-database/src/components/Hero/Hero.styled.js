import styled from "styled-components";

const StyledHero = styled.div`
margin: 1rem;

section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div {
    margin-bottom: 1rem;
}

h2 {
    color: black;
    margin-bottom: 1rem;
    font-size: 2.3rem;
    font-family: 'Rubik';
}

h4 {
    color: #2B3467;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-family: 'Rubik';
}

p {
    color: black;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-family: 'Rubik';
    align-items: justify;
}

img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    float: right;
}

@media (min-width: 768px) {

}

@media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;


    section {
        display: flex;
        flex-direction: row;
        text-align: left;
    }

    .hero__left {
        flex-basis: 70%;
    }

    .hero__right {
        flex-basis: 60%;
    }
}
`;

export default StyledHero;