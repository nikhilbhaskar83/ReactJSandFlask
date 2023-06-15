import React, { useState } from 'react'

function Repeat() {
    const [txtData, setTxtData] = useState('')
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    const setFreshCount = () => {
        setNewCount(count)
    }

    return (
        <div className="categories">
            <form id='myForm' >
                <label htmlFor="txt">Text</label>
                <input type="text" name="txt" value={txtData} required
                    onChange={e => setTxtData(e.target.value)} />
                <input type="text" name="cnt" value={count} required
                    onChange={e => setCount(Number(e.target.value))} />
                <input type="button" value="Submit" id="btnsubmit" onClick={() => setFreshCount()} />
            </form>

            <div className="col">
                {
                    <div>{[...Array.from(Array(newCount).keys())].map((num, i) => <p key={i}>{txtData}</p>)}</div>
                }
            </div>
        </div>
    )
}

export default Repeat;
