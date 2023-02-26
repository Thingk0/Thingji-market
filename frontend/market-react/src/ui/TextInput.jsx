import React from "react";
import styled, {css} from "styled-components";


const StyledTextArea = styled.textarea.attrs({require})`
  width: calc(100% - 32px);
  ${(props) =>
    `height: ${props.height};
  `}
  ${(props) =>
      (props.c) && css
      `line-height: ${props.height};`
    }
  resize: none;
  border-radius: 6px;
  font-size: 20px;
  margin: 1% 0;
`


const TextInput = (props) => {
    const { value, onChange, height, c, placeholder } = props;


    return(
        <StyledTextArea
            value={value}
            onChange={onChange}
            height={height}
            c={c}
            placeholder={placeholder}
        />
    );
}
export default TextInput;