function ListItem(props){
     const {el} = props;
    return(
        <div>
            <li>
                {el.name}
                {' '}
                {el.description}
                <button onClick={() => props.deleteCard(el._id)}>Delete</button>
            </li>
        </div>
    )
}

export  default ListItem;