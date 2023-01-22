interface Props {
    videogames: number;
    videogamesPerPage: number;
    paginado: Function;
}

export default function Paginado({videogames, videogamesPerPage, paginado}: Props){
    const pageNumbers = [];
    

    for (let i = 1; i <= Math.ceil(videogames/videogamesPerPage); i++) {
       pageNumbers.push(i);
    }

    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number => (
                    <li key = {number}>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}