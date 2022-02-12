function AboutMe() {
  return (
    <>
      <section className="about-me py-5 my-2">
        <div className="container d-flex justify-content-between gap-5" >
          <h2 className="fs-1  fw-bold">About me</h2>
          <div className=" w-75">
            <p className="lead fs-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. 
            </p>
            {/* <a className="btn btn-primary btn-lg " >
                 Download Resume
            </a> */}
            <a className="btn btn-dark mt-4 p-2 " href="./Kerolos-Fayez.pdf" title="DownloadResume" download={'./Kerolos-Fayez.pdf'}>
            Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
