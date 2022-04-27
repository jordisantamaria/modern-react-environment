// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import './App.css'

const color = 'white'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
function App() {
  return (
      <div>
          <div
              css={css`
                padding: 32px;
                background-color: hotpink;
                font-size: 24px;
                border-radius: 4px;
                text-align: start;
                &:hover {
                  color: ${color};
                }
                margin-bottom: 20px;
          `}
              className={'App'}
          >
              Hover to change color.
          </div>
          <Button>Button in styled way</Button>
      </div>

  );
}

export default App;
