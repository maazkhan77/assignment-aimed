import styled from 'styled-components'

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: ${props => props.weight || 500} ;
  color: ${props => props.color || "black"};
  line-height: ${props=> props.lineHeight || 0};
`

export { Label, }