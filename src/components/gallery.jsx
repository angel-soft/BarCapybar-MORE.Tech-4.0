import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="activities" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Предстоящие активности</h2>
          <p>
            Участие в жизни компании – твой путь к успеху!
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Загрузка..."}
          </div>
        </div>
      </div>
    </div>
  );
};
