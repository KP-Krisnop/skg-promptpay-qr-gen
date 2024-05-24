import LogoA from '../assets/logos/LogoA.png';
import LogoB from '../assets/logos/LogoB.png';
import LogoC from '../assets/logos/LogoC.png';
import LogoD from '../assets/logos/LogoD.png';
import LogoE from '../assets/logos/LogoE.png';
import LogoF from '../assets/logos/LogoF.png';
import LogoG from '../assets/logos/LogoG.png';
import LogoH from '../assets/logos/LogoH.png';

function InfoDisplay({ name, accountNumber }) {
  return (
    <>
      <div className="info-container">
        <p>Scan QR to transfer to account</p>
        <p>Name: {name}</p>
        <p>Account No.: {accountNumber}</p>
      </div>
      <div className="company-logo-container">
        <img src={LogoA} alt="" className="sakongroup-logos" />
        <img src={LogoB} alt="" className="sakongroup-logos" />
        <img src={LogoC} alt="" className="sakongroup-logos" />
        <img src={LogoD} alt="" className="sakongroup-logos" />
        <img src={LogoE} alt="" className="sakongroup-logos" />
        <img src={LogoF} alt="" className="sakongroup-logos" />
        <img src={LogoG} alt="" className="sakongroup-logos" />
        <img src={LogoH} alt="" className="sakongroup-logos" />
      </div>
    </>
  );
}

export default InfoDisplay;
