import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  #logoMin {
    display: none;
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #a8a8b3;

    transition: color 2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }

  @media (max-width: 768px) {
      flex-direction: row-reverse;

      svg {
        width: 42px;
        height: 42px;
        color: #3a3a3a;

      }

      a {
        font-size: 1.2rem;
      }

      #logo {
        display: none;
      }

      #logoMin {
        display: block;
        width: 35px;
        height: 35px;
      }
  }

`

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 1.5rem;

      strong {
        font-size: 2.25rem;
      }

      p {
        font-size: 1.15rem;
        color: #737380;
        margin-top: 4px;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;

      div {
        margin-top: 1rem;
        text-align: center;
        justify-content: center;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

      /* text-align: center; */

      & + li {
        margin-left: 5rem;
      }

      svg {
        display: none;
      }

      strong {
        display: block;
        font-size: 2.25rem;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #3b3b4d;
      }


    }

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;

        text-align: center;

        li {
          flex: 33%;

          margin: 0;

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          svg {
            display: block;
            margin-bottom: 1rem;
            color: #3b3b4d;
          }

          strong {
            font-size: 1.2rem;
          }

          span {
            display: none;
          }
        }
    }
  }
`


export const Issues = styled.div`
  margin-top: 80px;

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
