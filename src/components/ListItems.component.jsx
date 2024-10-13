export function ItemList({ props }) {
    const listItems = props.map(product => <li key={product.id}>{product.title}</li>)

    return (
        <ul>{listItems}</ul>
    )
}
