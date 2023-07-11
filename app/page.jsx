import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Piechart from "@/components/Piechart";
import Barchart from "@/components/Barchart";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

const page = () => {
  return (
    <>
      <Header/>
      <Hero/> 
      <About/>
      <h1 className="text-yellow-500 text-4xl font-semibold flex justify-center mt-40 mb-9">Our Clients</h1>
      <div className="flex gap-40 justify-center">
      <Piechart/>
      <Barchart/>
      </div>
      <Services/>
      <Team/>
      <Testimonials/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default page