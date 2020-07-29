import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
color: black;
padding: 2.0em;
margin: 1.2em;
margin-left: 0.4em;
position: relative;
padding-top: 7em;
text-decoration: none;
font-weight: bold;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
&:active {
  background: #white;
  color: #fff;
}
`;
