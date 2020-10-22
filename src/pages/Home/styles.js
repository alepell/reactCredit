import styled from 'styled-components';

export const Container = styled.div`
  width: 1024px;
  height: 596px;
  background: #fff;
  display: flex;
  position: relative;
`;

export const RedContainer = styled.div`
  width: 352px;
  background: #f37272;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a, h3 {
    color: #fff;
  }
  a {
    text-decoration: none;
    margin-top: 53px;
    font-size: 13px;
  }

  a::before {
    font-family: 'FontAwesome';
    content: '\f053';
    margin-right: 10px;
  }
`

export const AddNewCreditCard = styled.div`
  margin-top: 53px;
  display: flex;
  max-width: 280px;
  align-self: flex-end;
  h3  {
    font-size: 22px;
  }

  img {
    margin-right: 10px;
  }
`

export const InputContainer = styled.div`
  height: 100%;
  width: 672px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
  input {
    width: 450px;
    height: 50px;
    border: none;
    border-bottom: 1px solid #c9c9c9;
    margin-top: 40px;
    font-size: 17px;
    &::placeholder {
      color: #f37272;
      font-size: 17px;
      opacity: 100%;
    }
  }

  section {
    position: relative;

  }

  section::after {
    font-family: 'FontAwesome';
    content: '\f078' ;
    color: #f37272;
    right: 11px;
    top: 60px;
    padding: 0 0 2px;
    /*left line */
    pointer-events: none;
    position: absolute;
    transition: all .2s;
  } 

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 450px;
    height: 50px;
    border: none;
    border-bottom: 1px solid #c9c9c9;
    margin-top: 40px;
    font-size: 17px;
    color: #f37272;
    cursor: pointer;
  }

  option {
    color: #c9c9c9;
  }
`

export const InputWrapper = styled.div`
  width: 450px;

  input {
    width: 210px;
    height: 50px;
    border: none;
    border-bottom: 1px solid #c9c9c9;
    margin-top: 40px;
    font-size: 17px;
    &::placeholder {
      color: #f37272;
      font-size: 17px;
      opacity: 100%;
    }
  }

`

export const CreditCardContainer = styled.div` 
    position: absolute;
    left: 60px;
    top: 250px;
`