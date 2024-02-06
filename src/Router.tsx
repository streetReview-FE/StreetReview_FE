import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GoogleMaps from './components/GoogleMaps';
import MainPage from './Pages/MainPage';
import Login from './components/Login/GoogleLogin';
import RedirectionPage from './components/Login/redirectionPage';
import MyPage from './Pages/MyPage/MyPage';
import MyReview from './components/Mypage/MyReview';
import MyComment from './components/Mypage/MyComment';
import MyLikeComment from './components/Mypage/MyLikeComment';
import MySecession from './components/Mypage/MySecession';
const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/googleMap" element={<GoogleMaps/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/google/auth" element={<Login/>}/>
        <Route path="/mypage" element={<MyPage />}>
          <Route path="review" element={<MyReview/>} />
          <Route path="mycomment" element={<MyComment />} />
          <Route path="likecomment" element={<MyLikeComment />} />
          <Route path="secession" element={<MySecession />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Router;