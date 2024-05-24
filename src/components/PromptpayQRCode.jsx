import QRCode from 'react-qr-code';
import generatePayload from 'promptpay-qr';

function PromptpayQRCode({ amount, mobileNumber }) {
  amount = Number(amount.replace(/\D/g, ''));
  const amountCondition = amount !== 0 && mobileNumber !== '' && amount <= 999999999999999900000n;
  let qrcode = 0;

  if (amountCondition) {
    qrcode = generatePayload(mobileNumber, { amount });
  }

  return amountCondition && <QRCode className="qr-code" size={256} value={qrcode} viewBox={`0 0 256 256`} />;
}

export default PromptpayQRCode;
