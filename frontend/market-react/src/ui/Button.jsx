import React from "react";
import styled, {css} from "styled-components";


export const StyledButton = styled.button`
  padding: 8px 20px;
  font-size: 20px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin: 10px;
  text-align: center;

  ${(props) =>
      `background-color: ${props.bg_color};`
  };
  ${(props) =>
      `width: ${props.size};`
  }
  ${(props) =>
      (props.topBtn) && css
      `
      width: 55px;
      height: 50px;
      font-size: 35px;
      padding: 0;
      `
  }
`;


function Button(props) {

    const {title, onClick, bg_color, size, topBtn} = props;


    return (
        <StyledButton
            onClick={onClick}
            bg_color={bg_color}
            size={size}
            topBtn={topBtn}
        >
            {title}
        </StyledButton>
    );
}

export default Button;