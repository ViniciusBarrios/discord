import styled from "styled-components";

import { ExpandMore } from "styled-icons/material"

export const Container = styled.div`
  grid-area: SN;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;

  background-color: var(--secondary);

  box-shadow: #00000033 0px 1px 0px 0px;

  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);

  cursor: pointer;
`;