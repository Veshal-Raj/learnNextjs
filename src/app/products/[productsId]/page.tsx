export default function ProductId({ params }: {
    params: { productsId: string }
}) {
    return <h1>details of product {params.productsId}</h1>
}