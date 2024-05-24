function InputField({ onChanges, values }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor="accountName">Phone, ID, Wallet ID:</label>
        <input type="tel" onChange={onChanges.handlePromptPayNumber} value={values.prmPayNum} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="Prompt Pay Number" />
      </div>
      <div className="input-container">
        <label htmlFor="accountName">Name:</label>
        <input type="text" id="accountName" onChange={onChanges.handleChangeAccountName} value={values.accountName} placeholder="Account Holder" />
      </div>
      <div className="input-container">
        <label htmlFor="accountNumber">Account No.:</label>
        <input type="text" id="accountNumber" onChange={onChanges.handleChangeAccountNumber} value={values.accountNumber} placeholder="Account Number" />
      </div>
    </>
  );
}

export default InputField;
