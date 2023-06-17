import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';

const { mobile, tablet, desktop } = breakpoints;

export const StyledUserInfo = styled.div`
  display: block;
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: -40px;
  width: 100vw;
  height: 40px;
  background-color: #eff1f3;
  @media screen and (min-width: ${tablet}) {
    position: static;
margin-right: 48px;
    background-color: transparent;
  }
`;

export const NavUserInfo = styled.div`
  width: 0px;
  height: 32px;
  border: 2px solid #e0e0e0;
`;

export const Button = styled.button`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  padding: 0;

  color: #9b9faa;

  border: none;
  background-color: transparent;
  &:hover,
  &:focus {
    color: #212121;
  }
`;

export const StyledTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #9b9faa;
  &:hover,
  &:focus {
    color: #212121;
  }
`;

export const ButtonBack = styled.button`
  position: absolute;
  left: 0;
  border: none;
  background-color: transparent;
  stroke: #000000;
  padding: 0;
  cursor: pointer;
  @media screen and (min-width: &{tablet}) {
    display: none;
  }
`;

export const StyledSvgBack = styled.svg`
  width: 12px;
  height: 7px;
  @media screen and (min-width: ${tablet}) {
    display: none;
  }
`;

// @media screen and (min-width: 320px) {}

// @media screen and (min-width: 768px) {}

// @media screen and (min-width: 1200px) {}

