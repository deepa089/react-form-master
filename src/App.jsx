import './App.css'
import Aunty from './components/Aunty/Aunty'
import Brother from './components/Brother/Brother'
import Cousin from './components/Cousin/Cousin'
import Dad from './components/Dad/Dad'
import GrandPa from './components/GrandPa/GrandPa'
import Myself from './components/Myself/Myself'
import Sister from './components/Sister/Sister'
import Uncle from './components/Uncle/Uncle'
// import ReusableForm from './components/ReusableForm/ReusableForm'

function App() {
  /* const handleSignUpSubmitBtn = data => {
    console.log('sign up', data);
  }

  const handleUpdateProfileSubmitBtn = data => {
    console.log('profile', data);
  } */

  return (
    <div className='grandPa'>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}

      {/* <ReusableForm formTitle={'Sign Up'} handleSubmitButton={handleSignUpSubmitBtn} >
        <div>
          <h2>Sign Up</h2>
          <p>Please fill up form</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText={'Update'} handleSubmitButton={handleUpdateProfileSubmitBtn}>
        <div>
          <h2> Profile Update</h2>
          <p> Always keep ur profile updated</p>
        </div>
      </ReusableForm> */}

      <GrandPa>
        
      </GrandPa>
    </div>
  )
}

export default App
