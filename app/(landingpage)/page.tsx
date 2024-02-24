import {
  Hero,
  Solution,
  Payment,
  Why,
  Rate,
  Calculator,
  Testimoni,
  Questions,
  Download
} from "@/components/LandingPage/Home"
import Layout from "@/components/LandingPage/Layout/index"


export default function Home() {

  return (
    <Layout>
      <>
        <Hero />
        <Solution />
        <Payment />
        <Why />
        <Rate />
        <Calculator />
        <Testimoni />
        <Questions/>
        <Download/>
      </>
    </Layout>
  );
}
