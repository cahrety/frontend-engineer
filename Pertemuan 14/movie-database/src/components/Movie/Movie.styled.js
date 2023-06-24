import styled from "styled-components";

const StyledMovie = styled.div`
margin-bottom: 1rem;

img {
  border-radius: 10px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}

h3 {
  color: #2B3467;
    font-size: 1.95rem;
    font-family: 'Rubik';
    margin-bottom: 0.5rem;
}

p {
  color: #EB455F;
}

@media (min-width: 768px) {
        flex-basis: 50%;
}

@media (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
}
`;

export default StyledMovie;