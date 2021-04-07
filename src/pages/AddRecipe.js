import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addRecipe } from '../redux/actions/recipes'

export const AddRecipe = () => {
    const dispatch = useDispatch()
    const [fields, setFields] = React.useState({
        name: '',
        imageUrl: '',
        description: ''
    })

    const {recipes} = useSelector(state => state.recipes)

    const handleAdd = () => {
        const recipe = {
            id: Date.now(),
            name: fields.name,
            image: fields.imageUrl,
            description: fields.description, 
        }
        dispatch(addRecipe(recipe))
    }

    React.useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes))
    }, [recipes])

    return(
        <div className='content'>
            <div className='wrapperAdd'>
                <h6 className='center'>Добавьте рецепт</h6>
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
                        <button className='btn deep-purple lighten-4 pulse' onClick={handleAdd}>Сохранить</button>
                    </div>
                    <div className='col s5'></div>
                </div>
            </div>
        </div>
    )
}