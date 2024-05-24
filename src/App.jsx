import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import PromptpayQRCode from './components/PromptpayQRCode';
import InputField from './components/InputField';
import InfoDisplay from './components/InfoDisplay';
import PrompyPayLogo from './assets/prompt-pay-logo.svg';
import ThaiQRLogo from './assets/thai-qr-logo.svg';
import './App.css';

function App() {
  const [amount, setAmount] = useLocalStorage('amount', '');
  const [prmPayNum, setPrmPayNum] = useLocalStorage('mobileNumber', '');
  const [accountName, setAccountName] = useLocalStorage('accountName', '');
  const [accountNumber, setAccountNumber] = useLocalStorage('accountNumber', '');
  const [amountInputLength, setAmountInputLength] = useLocalStorage('amountInputLength', '');
  const [qrCodeHeight, setQRCodeHeight] = useLocalStorage('qrCodeHeight', 256);
  const [fieldPage, setFieldPage] = useLocalStorage('fieldPage', true);

  function handleChangeAmount(e) {
    const price = e.target.value;
    let formattedNum = '';

    const dotIndex = price.indexOf('.');
    if (dotIndex !== -1) {
      const wholeNumber = price.slice(0, dotIndex + 1);
      const decimalNumber = price.slice(dotIndex + 1);
      formattedNum = Number(wholeNumber.replace(/,/g, '')).toLocaleString() + '.' + decimalNumber;
      setAmount(formattedNum);
    } else {
      formattedNum = Number(price.replace(/,/g, '')).toLocaleString();
      setAmount(formattedNum);
    }

    const charLength = formattedNum.length;
    let smallCharCount = 0;
    if (formattedNum.match(/1/g) != null) {
      smallCharCount = formattedNum.match(/1/g).length;
    }
    let commaCount = 0;
    if (formattedNum.match(/,/g) != null) {
      commaCount = formattedNum.match(/,/g).length;
    }
    let dotCount = 0;
    if (formattedNum.match(/\./g) != null) {
      dotCount = formattedNum.match(/\./g).length;
    }

    setAmountInputLength(charLength - smallCharCount * 0.4 - commaCount * 0.65 - dotCount * 0.9);

    if (charLength !== 1) {
      e.target.style.width = `${amountInputLength}ch`;
    } else {
      e.target.style.width = '50px';
    }
  }

  function handlePromptPayNumber(e) {
    const ppNum = e.target.value;
    setPrmPayNum(ppNum);
  }

  function handleChangeAccountName(e) {
    const currentAccName = e.target.value;
    setAccountName(currentAccName);
  }

  function handleChangeAccountNumber(e) {
    const currentAccNum = e.target.value;
    setAccountNumber(currentAccNum);
  }

  function handleChangeField(e) {
    setFieldPage(!fieldPage);
    if (fieldPage) {
      setQRCodeHeight(192);
    } else {
      setQRCodeHeight(256);
    }
  }

  return (
    <>
      <header>
        <img className="thai-qr-logo" src={ThaiQRLogo} alt="Thai QR Payment" />
      </header>
      <section>
        <img className="prompt-pay-logo" src={PrompyPayLogo} alt="Prompt Pay" />
        <div className="qrCodeContainer" onClick={handleChangeField} style={{ width: `${qrCodeHeight}px`, height: `${qrCodeHeight}px` }}>
          {<PromptpayQRCode amount={amount} mobileNumber={prmPayNum} />}
        </div>
        <div className="amount-container">
          <input type="text" className="amount" onChange={handleChangeAmount} value={amount} min={0} style={{ width: `${amountInputLength}ch` }} placeholder="Amount" />
          <h3 className="thb">THB</h3>
        </div>
      </section>
      <div className="info-input-container">
        {fieldPage && <InfoDisplay name={accountName} accountNumber={accountNumber} />}
        {!fieldPage && <InputField onChanges={{ handlePromptPayNumber, handleChangeAccountName, handleChangeAccountNumber }} values={{ prmPayNum, accountName, accountNumber }} />}
      </div>
    </>
  );
}

export default App;
