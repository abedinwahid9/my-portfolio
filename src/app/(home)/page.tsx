import Main from "../components/home/Main";
import { DynamicMetadata } from "../components/share/DynamicMetaData";

export const metadata = DynamicMetadata({
  page: "Home",
});

export default function Home() {
  return (
    <section className="max-h-screen w-full flex py-10 justify-center items-center">
      <Main />
    </section>
  );
}
