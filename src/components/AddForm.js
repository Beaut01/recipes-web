import React from 'react'

export const AddForm = ({onAdd}) => {
    const [fields, setFields] = React.useState({
        name: '',
        imageUrl: '',
        description: ''
    })

    const addRecipe = () => {
        const obj = {
            id: Date.now(),
            name: fields.name,
            image: fields.imageUrl,
            description: fields.description, 
        }
        onAdd(obj)
    }

    return(
        <div className='wrapperAdd'>
            <h6 className='center' style={{paddingBottom: '15px'}}>Добавьте рецепт</h6>
            <hr />
            <div className='row'>
                <div className='input-field col s5'>
                    <input 
                        type='text' 
                        id='name' 
                        placeholder='Введите название рецепта' 
                        value={fields.name} 
                        onChange={(e) => setFields({...fields, name: e.target.value})} 
                    />
                </div>
                <div className='input-field col s7'>
                    <input 
                        type='text' 
                        id='image' 
                        placeholder='Введите ссылку на картинку' 
                        value={fields.imageUrl} 
                        onChange={(e) => setFields({...fields, imageUrl: e.target.value})} 
                    />
                </div>
            </div>
            <div className='row'>
                <div className='input-field col s12'>
                    <textarea 
                        type='text' 
                        id='description' 
                        placeholder='Введите описание рецепта' 
                        style={{padding: '10px', height: '230px', width: '720px'}} 
                        value={fields.description}
                        onChange={(e) => setFields({...fields, description: e.target.value})}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col s5'></div>
                    <div className='col s2'>
                        <button className='btn deep-purple lighten-4 pulse' onClick={addRecipe}>Сохранить</button>
                    </div>
                <div className='col s5'></div>
            </div>
        </div>
    )
}