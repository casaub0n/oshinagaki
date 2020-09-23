import styled from '@emotion/styled'

const Ul = styled('ul')`
    list-style: none;
  `
type TategakiAreaProps = {
  children?: React.ReactNode
}

export default function TategakiUl({children}: TategakiAreaProps): JSX.Element {
  return (<Ul>{children}</Ul>)
}
