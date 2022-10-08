import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { Features } from "../../components/features";
import { About } from "../../components/about";
import { Services } from "../../components/services";
import { Gallery } from "../../components/gallery";
import { Testimonials } from "../../components/testimonials";
import { Team } from "../../components/Team";
import { Contact } from "../../components/contact";
import JsonData from "../../data/data.json";

const Main = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default Main;
