import { useRecoilValue } from 'recoil';
import { navigationHeight } from 'src/recoil';

const Main = () => {
  const navHeight = useRecoilValue(navigationHeight);
  console.log(navHeight);
  return <div>Main</div>;
};

export default Main;
