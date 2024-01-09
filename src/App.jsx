import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Notification from "./Pages/Dashboard/Notification/Notification";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound";
import Appointments from "./Pages/Dashboard/Appointments/Appointments";
import Transaction from "./Pages/Dashboard/Transaction/Transaction";
import TotalIncome from "./Pages/Dashboard/Income/TotalIncome";
import Wallet from "./Pages/Dashboard/Income/Wallet";
import Subscription from "./Pages/Dashboard/Subscription/Subscription";
import Settings from "./Pages/Dashboard/Settings/Settings";
import Signin from "./Pages/Signin/Signin";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Otp from "./Pages/Otp/Otp";
import NewPassword from "./Pages/NewPassword/NewPassword";
import AllTherapist from "./Pages/Dashboard/PatientList/AllTherapist";
import TherapistRequest from "./Pages/Dashboard/PatientList/TherapistRequest";
import AllPatients from "./Pages/Dashboard/TherapistList/AllPatients";
import MatchedTherapist from "./Pages/Dashboard/TherapistList/MatchedTherapist";
import PatientsRequest from "./Pages/Dashboard/TherapistList/PatientsRequest";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              // <PrivateRoute>
              <Dashboard />
              // </PrivateRoute>
            }
          >
            <Route path="/" element={<DashboardHome />} />
            <Route path="/allTherapist" element={<AllTherapist />} />
            <Route path="/therapistRequest" element={<TherapistRequest />} />
            <Route path="/allPatients" element={<AllPatients />} />
            <Route path="/matchedTherapist" element={<MatchedTherapist />} />
            <Route path="/patientsRequest" element={<PatientsRequest />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/totalIncome" element={<TotalIncome />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/settings/:dynamic" element={<SettingPage />} /> */}
          </Route>
          <Route path="/login" element={<Signin />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp/:email" element={<Otp />} />
          <Route path="/new-password/:email" element={<NewPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
