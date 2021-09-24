import React from 'react'

export const InputSearcher = ({url = ''}) => {

    return (
        <div className="py-5">
            <input  
                type="text"
                className="form-control"
                placeholder={ url.includes('characters') ? 'type a character' : 'type an episode' }
            />
        </div>
    )
}
