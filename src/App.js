import {useState} from "react";
import axios from 'axios';
import ListItem from "./ListItem";

function App() {

    const [list, setList] = useState([])


    //  https://nazarov-kanban-server.herokuapp.com/card

    const getList = () => {

        axios.get('https://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                console.log(res)
                setList(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteCard = async (id) => {
        await axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))

        getList();
    }

    const createCard = async () => {
        await axios.post('https://nazarov-kanban-server.herokuapp.com/card/', {
                name: 'Learn JS',
                description: 'Not perfect'
            }
        )
            .then(res => console.log(res))
            .catch(err => (err))

        getList();
    }


    return (
        <div>
            <h3>Privet</h3>
            <button onClick={createCard}>Create</button>
            <button onClick={getList}>Get</button>
            <hr/>
            {list.map(el => <ListItem
                el={el}
                deleteCard={deleteCard}
                />

            )}


        </div>
    );
}

export default App;
