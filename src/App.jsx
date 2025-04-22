import './App.css';
import ColorizedContent from './components/colorized-content/colorized-content'
import ShowLabelButton from './components/buttons/show-label-button/show-label-button'

function App() {
  return (
    <>
      <ColorizedContent />
      <ShowLabelButton />
      <ShowLabelButton label='New Button/Label'/>
      <ShowLabelButton label='Another Button/Label'/>
    </>
  )
}

export default App;