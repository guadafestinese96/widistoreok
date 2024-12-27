import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from '../FilterProducts/FilterByMark'
import ItemList from './ItemList';


export default function ItemCarolina() {

    const { products, loading } = usePerfumesDB();
    const perfumes = FilterByMark(products, "ch");

    if (loading) return <h2 className='loading'>Cargando...</h2>

    return (
        <ItemList products={perfumes} />
    )
}
