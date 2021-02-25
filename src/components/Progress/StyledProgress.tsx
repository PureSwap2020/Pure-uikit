import styled from "styled-components";

interface BarProps {
  primary?: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.primary ? props.theme.colors.input : `${props.theme.colors.input}80`)};
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  height: 10px;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

const StyledProgress = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  height: 10px;
  overflow: hidden;
`;

export default StyledProgress;
