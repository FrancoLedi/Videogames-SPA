import '../../index.css';

interface Props {
    videogames: number;
    videogamesPerPage: number;
    paginado: Function;
    page: number;
}

export default function Paginado({videogames, videogamesPerPage, paginado, page}: Props){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(videogames/videogamesPerPage); i++) {
       pageNumbers.push(i);
    }

    

    function turnThePage(string: string) {
        switch (string) {
            case 'prev':
                
                if (page !== 1) {
                    
                    paginado(page - 1);
                }
                

                break;

            case 'next':
                
                if (page !== pageNumbers.length){

                    paginado(page + 1); 
                }

                break;
        
            default:
                break;
        }
    }

    return(
        <nav className="ContainerPaginado">
            <a className="PageButtons" onClick={ () => turnThePage('prev') }>«</a>
            <ul className='Numbers'>
                {pageNumbers && pageNumbers.map(number => (
                    <li key = {number}>
                    <a className={ page === number ? 'ActiveNumber' : 'SingleNumber' } onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
            <a className="PageButtons" onClick={() => turnThePage('next') }>»</a>
        </nav>
    )
}