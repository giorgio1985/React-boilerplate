import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
color: black;
padding: 0.3em;
margin: 1.2em;
margin-left: 0.5em;
position: relative;
padding-top: 3.1em;
text-decoration: none;
font-weight: bold;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
&:active {
  background: #white;
  color: #fff;
}
`;
