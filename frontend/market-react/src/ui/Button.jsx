import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  padding: 8px 25px;
  font-size: 20px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  ${(props) =>
      `background-color: ${props.bg_color};`
  }
`;


function Button(props) {

    const {title, onClick, bg_color, size} = props;


    return (
        <StyledButton
            onClick={onClick}
            bg_color={bg_color}>{title}</StyledButton>
    );
}

export default Button;