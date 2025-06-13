import logo from './logo.svg';
import './App.css';
import Useradd from './Useradd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productadd from './Productadd';

import ViewProduct from './ViewProduct';
import NavBarAdmin from './NavBarAdmin';
import NavBarUser from './NavBarUser';
import ViewProductUser from './ViewProductUser';
import Stock from './Stock';
import UserMyOrder from './UserMyOrder';
import TodaySellAdmin from './TodaySellAdmin';
import PaymentGateway from './PaymentGetway';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBarUser></NavBarUser> */}
      {/* <NavBarAdmin></NavBarAdmin> */}
      {/* <Useradd></Useradd> */}
      {/* <ViewProduct></ViewProduct> */}
      <Routes>
                        <Route path="/" element={<Useradd />} />

                <Route path="/add-product" element={<Productadd />} />
                <Route path="/View-Product" element={<ViewProduct />} />
                <Route path="/NavBarAdmin" element={<NavBarAdmin />} />
                <Route path="/NavBarUser" element={<NavBarUser />} />
                <Route path="/ViewProductUser" element={<ViewProductUser/>} />
                <Route path="/Stock" element={<Stock />} />
                <Route path="/UserMyOrder" element={<UserMyOrder/>} />
                <Route path="/TodaySellAdmin" element={<TodaySellAdmin/>} />


      </Routes>
      {/* <UserMyOrder></UserMyOrder> */}
      {/* <Useradd></Useradd>
      <Productadd></Productadd> */}
      <PaymentGateway></PaymentGateway>
     
      
      
            </BrowserRouter>
    </div>
  );
}

export default App;
