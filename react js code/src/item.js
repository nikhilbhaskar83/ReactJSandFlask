import React, { useState, useContext } from 'react'


function Items() {
    const [items, setItems] = useState([])
    const [item, setItem] = useState('')

    const createItem = async e => {
        e.preventDefault()
        try {
            setItems([...items, item])
            setItem('')


        } catch (err) {
            alert('Error')
        }
    }


    const deleteItem = async name => {
        try {
            setItems(items.filter(a => a !== name))
        } catch (err) {
            alert('Error')
        }
    }

    return (
        <div className="items">
            <form onSubmit={createItem}>
                <label htmlFor="item">Item</label>
                <input type="text" name="item" value={item} required
                    onChange={e => setItem(e.target.value)} />

                <button type="submit"> Create</button>
            </form>

            <div className="col">
                {
                    items.map((item, i) => (
                        <div className="row" key={i}>

                            <div>
                                {item}
                                <button onClick={() => deleteItem(item)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Items
