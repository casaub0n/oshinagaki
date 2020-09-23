import styled from '@emotion/styled'

const TategakiArticle = styled('article')`
    .wf-hannari { font-family: "Hannari"; }
    font-family: 'Hannari', serif;
    -webkit-font-feature-settings: 'pkna';
    font-feature-settings: 'pkna';
    font-size: 17px;
    line-height: 1.9;
    letter-spacing: 0.03em;
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
  `
type TategakiAreaProps = {
  children: React.ReactNode
}

export default function TategakiArea({children}: TategakiAreaProps): JSX.Element {
  return (<TategakiArticle>{children}</TategakiArticle>)
}
