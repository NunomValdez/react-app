export default function CoreConcepts({description, title, image}){
    return (
        <>
        <li>
            <img src={image} alt={description} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
        </>
    )
};