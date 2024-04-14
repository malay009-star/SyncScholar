import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLauout from './authlayout/index'
import Login from './pages/login'
import SignUp from './pages/signup'
import EmailverifiCode from './pages/emailverifycode'
import Signuppassword from './pages/signuppassword'
import TaskDetails from './pages/taskDetails'
import Chatbox from './pages/chatbox'
import Status from './pages/status'
import ChatContext from './context/chatContext'
import Payment from './pages/payment/stripeContainer'
import Errorpage from './pages/errorpage'


function App() {

  return (
    <ChatContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <AuthLauout>
              <Login />
            </AuthLauout>
          } />
          <Route path='/login' element={
            <AuthLauout>
              <Login />
            </AuthLauout>
          } />
          <Route path='/signup' element={
            <AuthLauout>
              <SignUp />
            </AuthLauout>
          } />
          <Route path='/emailverificode' element={
            <AuthLauout>
              <EmailverifiCode />
            </AuthLauout>
          } />
          <Route path='/signuppassword' element={
            <AuthLauout>
              <Signuppassword />
            </AuthLauout>
          } />
          <Route path='/chat' element={
            <AuthLauout>
              <Chatbox />
            </AuthLauout>
          } />
          <Route path='/status' element={
            <AuthLauout>
              <Status />
            </AuthLauout>
          } />
          <Route path='/taskdetails' element={
            <AuthLauout>
              <TaskDetails />
            </AuthLauout>
          } />
          <Route path='/payment' element={
            <AuthLauout>
              <Payment />
            </AuthLauout>
          } />
          <Route path='*' element={
            <Errorpage />
          } />
        </Routes>
      </BrowserRouter >
    </ChatContext>
  )
}

export default App
