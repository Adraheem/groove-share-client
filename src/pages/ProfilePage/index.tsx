import React from 'react';
import Container from "../../components/Container";
import {useAppSelector} from "../../redux/hooks";
import images from "../../assets/images";
import {Menu} from "antd";
import tabItems from "./tabItems";
import {Outlet, useLocation} from "react-router-dom";

interface IProps {
}

function ProfilePage(props: IProps) {
  const userDetails = useAppSelector(state => state.auth.userDetails);
  const {pathname} = useLocation();

  const selectedTab = React.useMemo(() => {
    switch (pathname) {
      case "/profile/billing":
        return "billing";

      default:
        return "userDetails";
    }
  }, [pathname])

  return (
    <Container className="mt-12">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/4 xl:w-1/6">
          <div
            className="max-w-[150px] aspect-square rounded-full drop-shadow-2xl overflow-hidden mb-5">
            <img src={images.userProfilePic} alt="" className="image-cover"/>
          </div>
          <h4>{userDetails?.firstName} {userDetails?.lastName}</h4>
          <p className="text-slate-400">{userDetails?.username && `@${userDetails.username}`}</p>
        </div>
        <div className="flex-1 pb-20">
          <Menu mode="horizontal" items={tabItems} className="mb-10" selectedKeys={[selectedTab]}/>

          <Outlet/>
        </div>
      </div>
    </Container>
  );
}

export default ProfilePage;
