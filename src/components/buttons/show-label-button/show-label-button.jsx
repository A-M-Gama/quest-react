import './show-label-button.css'

const ShowLabelButton = ({label = 'CLick to Show Label'}) => {
    return  <button 
                className='showLabelButton' 
                onClick={(label) => alert(`A label desse botão é "${label.target.innerHTML}"`)}>{label}
            </button>
}

export default ShowLabelButton