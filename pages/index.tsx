import Link from "next/link";
import AppList from "../components/AppList";
import Nav from "../components/Nav";

const IndexPage = () => (
  <>
    <img
      src="/background.svg"
      className="bg-gradient-to-br from-gray-600 to-pink-300 z-0 w-full h-full absolute top-0 left-0"
    />
    <Nav />
    <AppList />
  </>
);

export default IndexPage;
