import style from './PdfButton.module.css'


function PrintBtn () {
  const handlePrint = () => {
    window.print();
}


  return (
    <div className={style.Btn}>
          <button onClick={handlePrint}>Imprimir</button>
    </div>

  );
};

export default PrintBtn;
