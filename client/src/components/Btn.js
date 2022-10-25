import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => {
    return props.backColor;
  }};
  width: ${(props) => props.width};
  height: ${(props) => props.height || '40px'};
  font-size: ${(props) => props.fontSize};
  border-radius: 5px;

  > span {
    color: ${(props) => props.textColor || 'white'};
  }

  :hover {
    background: #0069c5;
  }
`;

const Btn = ({ text, textColor, height, backColor, width, fontSize }) => {
  return (
    <Button
      textColor={textColor}
      height={height}
      backColor={backColor}
      width={width}
      fontSize={fontSize}
    >
      <span> {text} </span>
    </Button>
  );
};

Btn.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  backColor: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Btn;
