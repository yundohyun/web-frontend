import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => <h2>Home Page</h2>;
const One = () => <h2>Page 1</h2>;
const Two = () => <h2>Page 2</h2>;
const Three = () => <h2>Page 3</h2>;

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/1" element={<One />} />
        <Route path="/2" element={<Two />} />
        <Route path="/3" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Home;
