import './show-label-button.css'

const ShowLabelButton = ({label = 'CLick to Show Label'}) => {
    const showLabel = (label) => {
        alert(`A label desse botão é "${label.target.innerHTML}"`)
        console.log(label)
    }

    return  <button className='showLabelButton' onClick={showLabel}>{label}</button>
}

export default ShowLabelButton