import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  max-width: 700px;
`

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;

  margin-top: 80px;
`


export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 100%;

  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: none;
      `
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 50px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 100%;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 1rem;
    }

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 1rem;
      flex: 1;
      margin-right: 1rem;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }


  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  /* background: ;
  padding: ; */

  margin-top: .5rem;
`
