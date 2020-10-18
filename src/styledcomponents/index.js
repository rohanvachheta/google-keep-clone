import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }

  100%  {
    opacity: 1;
  }

`;

/* learning curver
  https://medium.com/@_alanbsmith/component-based-design-168811e0c4ab

  https://adele.uxpin.com/


  https://varun.ca/styled-system/

  https://github.com/styled-system/styled-system/blob/master/docs/how-it-works.md

  https://jxnblk.com/blog/posts/defining-component-apis-in-react/

  https://bradfrost.com/blog/post/atomic-web-design/

  https://daneden.me/blog/2018/subatomic-design-systems

  https://varun.ca/

  https://medium.com/styled-components/css-prop-support-for-create-react-app-37e8c5d96861

  https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd

  https://medium.com/styled-components/how-styled-components-works-618a69970421'

  https://medium.com/styled-components/responsive-styled-components-in-3-minutes-ae3b58cca57b

  https://react-live.netlify.app/

  https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee

  https://medium.com/styled-components/how-to-build-a-great-component-library-a40d974a412d

  https://styled-system.com/


*/

const StyleButton = styled.button`
  align-self: auto;
  animation: 2s ${fadeIn} ease-in;
  background-color: black;
  border: none;
  color: ${({ secoundary }) => (secoundary ? 'white' : 'red')};
  font-size: 1.8rem;
  margin: 1rem;
  outline: none;
  padding: 1rem 1rem;
  text-shadow: none;
  ${({ secoundary }) =>
    secoundary &&
    css`
      color: blue;
    `};
`;

const Link = styled.a.attrs((props) => ({
  target: '_blank',
}))`
  color: white;
`;

const SuperButton = styled(StyleButton)`
  font-size: 12rem;

  &:hover {
    color: white;
    background-color: pink;
  }

  &.test {
    color: navy;
  }
`;

const AppStyled = () => (
  <div>
    <StyleButton>test button</StyleButton>

    <StyleButton secoundary>test button secoundary</StyleButton>
    <SuperButton>hello</SuperButton>

    <Link>test</Link>
  </div>
);

AppStyled.propTypes = {
  //
};

export default AppStyled;
