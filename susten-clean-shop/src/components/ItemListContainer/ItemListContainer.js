import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";


export function ItemListContainer() {
    return ( 
        <div className="ItemList">
            <h2>Entrega N° 2 - Contador con botón</h2>

            <div className="ItemListCards">
                <ItemCount title="Producto 1" stock={5} initial={1} />
                <ItemCount title="Producto 2" stock={10} initial={1} />
                <ItemCount title="Producto 3" stock={3} initial={1} />
            </div>
        </div>
     );
}