import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/MainPage";
import { theme } from "./theme";
import SignUp from "./pages/SignUp";

import BoardPage from "./pages/BoardPage";
import MyPage from "./pages/Mypage";
import PostingPage from "./pages/PostingPage";
import { RecoilRoot } from "recoil";
import EditPage from "./pages/EditPage";
import WritingPage from "./pages/WritingPage";
import WritingEditPage from "./pages/WritingEditPage";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@1,8..60,300&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, tchead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: Inter;
  background-color:${(props) => props.theme.bgColor};
  color:black;
  line-height: 1.2;
  overflow-x: hidden;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/posting",
    element: <PostingPage />,
  },
  {
    path: "/edit/:postId",
    element: <EditPage />,
  },
  {
    path: "/board/:postId",
    element: <BoardPage />,
  },
  {
    path: "/writing",
    element: <WritingPage />,
  },
  {
    path: "/writingedit",
    element: <WritingEditPage />,
  },
  {
    path: "/",
    element: <Main />,
  },
]);
function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
