import { useFetch } from "../../components/hooks/useFetch";
import Blogs from "../../components/blogs/blogs";

const Home = () => {
  const { data } = useFetch("/blogs", {}, []);

  return (
    <div>
      <Blogs data={data?.payload} />
    </div>
  );
};

export default Home;
