import styled from '@emotion/styled'

const Li = styled('li')`
    text-indent: 1em;
    margin-left: 30px;
  `
type TategakiAreaProps = {
  children?: React.ReactNode
}

export default function TategakiLi({children}: TategakiAreaProps): JSX.Element {
  return (<Li>{children}</Li>)
}
