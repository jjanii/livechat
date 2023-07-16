import { ReactNode } from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #25d366;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #26de6b;
  }
`

type Props = {
  type?: "button" | "reset" | "submit"
  children: ReactNode
}

const Button = ({ type, children }: Props) => (
  <StyledButton type={type}>{children}</StyledButton>
)

export default Button
