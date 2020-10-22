import React, {useState} from 'react';
import { 
  Container, 
  RedContainer, 
  AddNewCreditCard,
  InputContainer,
  InputWrapper,
  CreditCardContainer,
} from './styles';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from "../../utils";
import './card.css'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import cardicon from '../../assets/images/cardicon.svg'

function Home() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <Container>

      <RedContainer>
        <a href="#">Alterar forma de pagamento</a>

        <AddNewCreditCard>
          <img src={cardicon} alt="icon"/>
          <h3>Adicione um novo cartão de crédito</h3>
        </AddNewCreditCard>
      </RedContainer>

      <InputContainer>
        
        <input 
          type="tel" 
          name="number" 
          pattern="[\d| ]{16,22}"
          placeholder="Número do cartão"
          value={formatCreditCardNumber(number)}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <input 
          type="text" 
          name="name"
          value={name}
          placeholder="Nome (igual ao cartão)"
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <InputWrapper>
          <input 
            type="text" 
            placeholder="Validade" 
            style={{marginRight: '25px'}}
            name="expiry"
            pattern="\d\d/\d\d"
            value={formatExpirationDate(expiry)}
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <input 
            type="tel" 
            placeholder="CVV"
            name="cvc"
            pattern="\d{3,4}"
            value={formatCVC(cvc)}
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        </InputWrapper>

        
        <section>
            <select name="" id="">
                <option value="" disabled selected >Número de parcelas</option>
                <option value="1x">1x à vista</option>              
                <option value="2x">2x 125,00</option>              
                <option value="3x">3x 83,30</option>              
                <option value="4x">4x 62,50</option>              
            </select>        
        </section>
        
        <CreditCardContainer>
          <Cards 
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </CreditCardContainer>

      </InputContainer>
    </Container>
  )
}

export default Home;