import Finder from "../components/Finder";
import { HeaderHome } from "../components/Headers/HeaderHome";

export function Home() {
  return (
    <>
        <HeaderHome title='MyTasks'/>
        <Finder/>
    </>
  );
}