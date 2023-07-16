import { ReactNode } from "react"
import styled from "styled-components"

const StyledP = styled.p`
  color: red;
  margin-bottom: 10px;
`

const ErrorMessage = ({ children }: { children: ReactNode }) => (
  <StyledP>{children}</StyledP>
)

export default ErrorMessage
