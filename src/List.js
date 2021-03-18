import React, {useState, useEffect} from 'react'
import {Data} from './Data'

const List = () => {
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange =(e) =>{
        setSearchTerm(e.target.value);
    }

    useEffect(() =>{
        const newList = Data.filter(item => item.first_name.toLowerCase().includes(searchTerm) 
        || item.email.toLowerCase().includes(searchTerm)        
        || item.gender.toLowerCase().includes(searchTerm)        
        );
        setList(newList);
    }, [searchTerm])

    return (
        <div className="lists">
            <input type="text" value={searchTerm} onChange={handleChange} placeholder='Search Here...'/>
            {
                list.map((person, key)=>{
                    const {id, first_name, email,gender} = person;
                    return(
                        <div className="list" key={id}>
                            <h1>{first_name}</h1>
                            <h1>{email}</h1>
                            <h1>{gender}</h1>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default List
