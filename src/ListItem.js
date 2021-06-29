import {useState} from "react";

function ListItem(props) {
    const {el} = props;

    const [confirm, setConfirm] = useState(false);

    const deleteAfterConfirm = () => {
        props.deleteCard(el._id)
        setConfirm(false)
    }


    return (
        <div>
            <li>
                {el.name}
                {' '}
                {el.description}
                &nbsp;

                {confirm ?
                    <>
                        <label style={{color: 'blue'}}>Are you sure?</label>
                        <button onClick={deleteAfterConfirm}>Yes</button>
                        <button onClick={() => setConfirm(false)}>No</button>
                    </>
                    :
                    (<button onClick={() => setConfirm(true)}>Delete</button>)
                }


            </li>

        </div>
    )
}

export default ListItem;