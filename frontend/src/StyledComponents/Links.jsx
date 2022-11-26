import styled from 'styled-components'

const Link = styled.a`
font-size: 0.8rem;
font-weight: ${props => props.weight || 400};
line-height: ${props=> props.lineHeight || 0};
text-decoration: ${props => props.decoration || "none"};
color: #F78719;
cursor: pointer;
`

export { Link, }