const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();/*Previene que el navegador se recargue por si solo*/
        
        const target = document.getElementById('counter');
        if (target && id) {
          const offset = window.innerHeight * 0.1; // Ajusta el desplazamiento según sea necesario
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      
      
      }}


      target="_blank"
      rel="noopener noreferrer"
      className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;