import styled from "styled-components";
import { mb_1_5, text_line_height } from "../../Styles/Variables";

export const CaseSection = styled.section`
  padding: 4rem 0 0 0;
  display: grid;
`;

export const CaseContainer = styled.div`
  display: grid;
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  position: relative;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 340px) {
    grid-template-columns: .6fr 1fr;
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: max-content 250px;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
  }
`;

export const CaseImg = styled.img`
  position: absolute;
  left: -7rem;
  width: 250px;

  @media screen and (max-width: 340px) {
    width: 220px;
    top: -2rem;
    left: -9rem;
  }

  @media screen and (min-width: 576px) {
    position: initial
  }
`;

export const CaseData = styled.div`
  padding: 5rem 0 3rem;

  @media screen and (max-width: 340px) {
    padding: 0;
  }

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`;

export const CaseDescription = styled.p`
  margin-bottom: ${mb_1_5};
  line-height: ${text_line_height};
`;
