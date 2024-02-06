import { MainContainer } from "./Container.styled";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
