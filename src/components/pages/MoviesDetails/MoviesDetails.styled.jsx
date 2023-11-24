import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const MovieWrapper = styled.div`
  margin-left: 15px;
`;
export const MovieTitle = styled.h1`
  margin-bottom: 15px;
`;
export const MovieSubtitle = styled.h2`
  margin-bottom: 10px;
  margin-top: 15px;
`;
export const AddInfo = styled.h3`
  margin-bottom: 10px;
  margin-top: 65px;
`;
export const Button = styled.button`
  margin-bottom: 25px;
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
`;
export const GenresList = styled.ul`
  display: inline-flex;
`;
export const ListAdd = styled.ul``;
export const LinkAdd = styled(Link)`
  &:hover,
  &: focus {
    color: red;
  }
`;
