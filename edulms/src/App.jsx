import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navheader/Navbar";
import NotFound from "./pages/Notfound";
import Footer from "./components/Footer/Footer";
import AllCourse from "./pages/AllCourse/AllCourse";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseCart from "./components/CourseCart/CourseCart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CourseCheckout from "./components/CourseCheckout/CourseCheckout";
import TermConditions from "./components/TermConditions/TermConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./pages/ContactUs/ContactUs";
import DashBoard from "./components/Admin/DashBoard/DashBoard";
import AdminSideNavaBar from "./components/Admin/AdminSideNavaBar/AdminSideNavaBar";
import ManageCourses from "./components/Admin/ManageCourses/ManageCourse";
import EnrollmentList from "./components/Admin/EnrollmentList/EnrollmentList";
import ProgressTracking from "./components/Admin/ProgressTracking/ProgressTracking";
import CommunicationTools from "./components/Admin/CommunicationTools/CommunicationTools";
import ManageCertificates from "./components/Admin/ManageCertificates/ManageCertificates";
import CourseScheduling from "./components/Admin/MasterLiveClass/CourseScheduling";
import CourseEnrollmentManager from "./components/Admin/MasterLiveClass/CourseEnrollmentManager";
import LiveSesssionScheduler from "./components/Admin/MasterLiveClass/LiveSesssionScheduler";
import InstructorAdminstrations from "./components/Admin/MasterLiveClass/InstructorAdminstrations";
import ViewTransationHistory from "./components/Admin/PaymentManagement/ViewTransationHistory";
import RefundManagement from "./components/Admin/PaymentManagement/RefundManagement";
import CouponManagement from "./components/Admin/PaymentManagement/CouponManagement";
import Category from "./components/Admin/ManageCourses/Category";
import SubcategoryManager from "./components/Admin/ManageCourses/Subcategory";
import { Aboutus } from "./pages/About/Aboutus";
import BlogPage from "./pages/blog/BlogPage";

import DashBoard1 from "./pages/DashBoard/DashBoard";
import ProgressTracking1 from "./pages/UserManagement/ProgressTracking1/ProgressTracking1";
import EnrollmentList1 from "./pages/UserManagement/EnrollmentList1/EnrollmentList1";
import StudentEnrollment1 from "./pages/UserManagement/StudentEnrollment/StudentEnrollment";
import CourseCreation1 from "./pages/CourseManagement/CourseCreation/CourseCreation";
import Category1 from "./pages/CourseManagement/Category1/Category1";
import Announcement1 from "./pages/Communication/Announcement/Announcement";
import Chat1 from "./pages/Communication/Chat/Chat";
import DiscussionForm1 from "./pages/Communication/DiscussionForm/DiscussionForm";
import LiveClass1 from "./pages/Communication/LiveClass/LiveClass";
import Assigngment1 from "./pages/Learning/Assignment/Assignment";
import Certification1 from "./pages/Learning/Certififcation/Certification";
import Quiz1 from "./pages/Learning/Quiz/Quiz";
import VideoLesson1 from "./pages/Learning/VideoLesson/VideoLesson";
import StudentCourse1 from "./pages/StudentPanel/Course/StudentCourse";
import StudentDashboard1 from "./pages/StudentPanel/Dashboard/StudentDashboard";
import Certificate1 from "./pages/StudentPanel/Certificate/Certificate";
import HelpDesk from "./pages/StudentPanel/HelpDesk/HelpDesk";
import Profile from "./pages/StudentPanel/Profile/Profile";
import ProfileForm from "./pages/StudentPanel/ProfileForm/ProfileForm";
import AssigngmentStudent1 from "./pages/StudentPanel/Assignment/Assignment";
import SubCategory1 from "./pages/CourseManagement/SubCategory1/SubCategory1";
import SalesReport from "./pages/Reports/SalesReports";
import StudentReport from "./pages/Reports/StudentReport";
import Assesment from "./pages/CourseManagement/CouseAssesment/Assesment";
import Assignemntviewpage from "./pages/StudentPanel/Assignment/Assignemntviewpage";
import StudentPerformance from "./pages/CourseManagement/CouseAssesment/StudentPerformance";
import CourseReports from "./pages/Reports/CourseReports";
import { useLocation } from "react-router-dom";
import MyCourseDetails from "./pages/MyCourseDetails/Mycoursedetails";

function AppContent() {
  const location = useLocation();
  const hideNavbarPaths = [
    "/InstructorManagement",
    "/PermisssionRoles",
    "/StudentEnrollment",
    "/CourseCreation",
    "/CuuriculumStucture",
    "/Announcement",
    "/Chat",
    "/DashBoard",
    "/dashboard",
    "/DiscussionForm",
    "/LiveClass",
    "/Assigngment",
    "/Certification",
    "/Quiz",
    "/VideoLesson",
    "/Certificate",
    "/HelpDesk",
    "/Profile",
    "/ProfileForm",
    "/AssigngmentStudent",
    "/AdminSideNavaBar",
    "/ManageCourses",
    "/EnrollmentList",
    "/ProgressTracking",
    "/CommunicationTools",
    "/ManageCertificates",
    "/CourseScheduling",
    "/CourseEnrollmentManager",
    "/LiveSesssionScheduler",
    "/InstructorAdminstrations",
    "/ViewTransationHistory",
    "/RefundManagement",
    "/CouponManagement",
    "/category",
    "/subcategory",
    "/EnrollmentList",
    "/Category",
    "/SubCategory",
    "/studentReports",
    "/salesReports",
    "/courseReports",
    "/StudentDashboard",
    "/StudentCourse",
    "/Mycoursedetails",
    "/assignmentviewpage"
  ];

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/AllCourse" element={<AllCourse />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/CourseCart" element={<CourseCart />} />
        <Route path="/coursCheckOut" element={<CourseCheckout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermConditions" element={<TermConditions />} />
        <Route path="/AdminSideNavaBar" element={<AdminSideNavaBar />} />
        <Route path="/ManageCourses" element={<ManageCourses />} />
        <Route path="/EnrollmentList" element={<EnrollmentList />} />
        <Route path="/ProgressTracking" element={<ProgressTracking />} />
        <Route path="/CommunicationTools" element={<CommunicationTools />} />
        <Route path="/ManageCertificates" element={<ManageCertificates />} />
        <Route path="/CourseScheduling" element={<CourseScheduling />} />
        <Route
          path="/CourseEnrollmentManager"
          element={<CourseEnrollmentManager />}
        />
        <Route
          path="/LiveSesssionScheduler"
          element={<LiveSesssionScheduler />}
        />
        <Route
          path="/InstructorAdminstrations"
          element={<InstructorAdminstrations />}
        />
        <Route
          path="/ViewTransationHistory"
          element={<ViewTransationHistory />}
        />
        <Route path="/RefundManagement" element={<RefundManagement />} />
        <Route path="/CouponManagement" element={<CouponManagement />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<SubcategoryManager />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/ProgressTracking" element={<ProgressTracking1 />} />
        <Route path="/EnrollmentList" element={<EnrollmentList1 />} />
        <Route path="/StudentEnrollment" element={<StudentEnrollment1 />} />
        <Route path="/CourseCreation" element={<CourseCreation1 />} />
        <Route path="/Category" element={<Category1 />} />
        <Route path="/SubCategory" element={<SubCategory1 />} />
        <Route path="/Announcement" element={<Announcement1 />} />
        <Route path="/Chat" element={<Chat1 />} />
        <Route path="/DiscussionForm" element={<DiscussionForm1 />} />
        <Route path="/LiveClass" element={<LiveClass1 />} />
        <Route path="/Assigngment" element={<Assigngment1 />} />
        <Route path="/Certification" element={<Certification1 />} />
        <Route path="/Quiz" element={<Quiz1 />} />
        <Route path="/VideoLesson" element={<VideoLesson1 />} />
        <Route path="/StudentCourse" element={<StudentCourse1 />} />
        <Route path="/StudentDashboard" element={<StudentDashboard1 />} />
        <Route path="/Certificate" element={<Certificate1 />} />
        <Route path="/HelpDesk" element={<HelpDesk />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ProfileForm" element={<ProfileForm />} />
        <Route path="/AssigngmentStudent" element={<AssigngmentStudent1 />} />
        <Route path="/Assesment" element={<Assesment />} />
        <Route path="/assignmentviewpage" element={<Assignemntviewpage />} />
        <Route path="/studentperformance" element={<StudentPerformance />} />
        <Route path="/salesReports" element={<SalesReport />} />
        <Route path="/studentReports" element={<StudentReport />} />
        <Route path="/courseReports" element={<CourseReports />} />
        <Route path="/mycoursedetails" element={<MyCourseDetails />} />

        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
