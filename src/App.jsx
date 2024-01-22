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
import AllTherapist from "./Pages/Dashboard/Therapist/AllTherapist";
import TherapistRequest from "./Pages/Dashboard/Therapist/TherapistRequest";
import AllPatients from "./Pages/Dashboard/Patients/AllPatients";
import MatchedTherapist from "./Pages/Dashboard/Patients/MatchedTherapist";
import PatientsRequest from "./Pages/Dashboard/Patients/PatientsRequest";
import Questionnaires from "./Pages/Questionnaires/Questionnaires";
import PatientRequestDetails from "./Pages/Dashboard/Patients/PatientRequestDetails";
import PatientRequestDetailsAssignTherapist from "./Pages/Dashboard/Patients/PatientRequestDetailsAssignTherapist";

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
            <Route path="/patientsRequest/:id" element={<PatientRequestDetails />} />
            <Route path="/patientsRequest/:id/:id" element={<PatientRequestDetailsAssignTherapist />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/questionnaires" element={<Questionnaires />} />
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
