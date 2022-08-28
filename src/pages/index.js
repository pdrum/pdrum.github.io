import React from "react"
import '../../static/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap"
import * as styles from '../styles/index.module.css'
import Sidebar from "../components/Sidebar";
import '../styles/global.css'
import MyNavbar from "../components/MyNavbar";

export default function Home() {
  return <Container fluid>
    <Row>
      <Col lg={3}>
        <Sidebar/>
      </Col>
      <Col lg={9} className="bg-secondary">
        <MyNavbar/>
        <div className={styles.content}>
          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Summary</h3></div>
            <div className="card-body">
              <p className="card-text">
                I'm a passionate software engineer, opting for
                delivery of maintainable, reliable software that also meets the
                deadlines.

                In my day job I am known for conforming to software engineering
                patterns and practices,
                delivering things on time and a desire for solving new problems.
                In my free time I try to
                improve that reputation by contributing to open source projects,
                learning new practices and
                technologies, writing blog posts and doing side projects.
              </p>
            </div>
          </section>


          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Education</h3></div>
            <div className="card-body">
              <p className="card-text">
                <table className="text-light">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">From</th>
                    <th scope="col">Till</th>
                    <th scope="col">University</th>
                    <th scope="col">Major</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2014</td>
                    <td>2019</td>
                    <td>Sharif University of Technology</td>
                    <td>Software Engineering</td>
                  </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </section>

          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Experiences</h3></div>
            <div className="card-body">
              <div className="card-text">
                <ul className="list-group">

                  <li className="list-group-item">
                    <div>
                      <h3>
                        Software Engineer at Cafe Bazaar <br/>
                        <small>Oct 2019 till now</small>
                      </h3>
                      <p>
                        Cafe Bazaar is a leading consumer internet company in
                        Iran that runs the first
                        and the most popular smartphone application marketplace
                        for Persian speaking countries.
                        It connects millions of smartphone users, advertisers
                        and application developers through
                        its highly scalable and technology-based platforms such
                        as Bazaar app store,
                        Divar a platform for classified advertisements and newly
                        launched
                        Balad a navigation and maps application.
                      </p>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div>
                      <h3>
                        Software Engineer at Snapp <br/>
                        <small>May 2019 till Oct 2019</small>
                      </h3>

                      <div>
                        <p>
                          Snapp is the first and leading mobile and web-based
                          ride-hailing platform in
                          Iran. Its mission is to enhance the effectiveness,
                          efficiency and quality of
                          urban transportation in Iran, through exceptional
                          software and service
                          capabilities. Within 4 years, it has welcomed more
                          than 20 million customers
                          and 1 million drivers to the family. At more than 2
                          million rides per day,
                          it is also the largest and fastest growing internet
                          company in the
                          Middle East.
                        </p>
                        <p>
                          In Snapp I work as a software engineer in a great team
                          that develops and
                          maintains high quality software delivered as
                          microservices written in
                          golang.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div>
                      <h3>
                        Software Engineer at Miare <br/>
                        <small>May 2017 till May 2019</small>
                      </h3>

                      <div>
                        <p>
                          Miare is a B2B food delivery company. It provides
                          restaurants with a panel
                          through which they can ask for a courier to deliver
                          their food to their
                          customers.
                        </p>
                        <p>
                          In Miare I was a member of a highly talented, vibrant
                          team, working on
                          development and maintenance of aforementioned product
                          which had complex
                          technical, financial and operational aspects. My
                          responsibilities
                          mostly consisted of proposing suitable technical and
                          architectural solutions
                          for business requirements and developing backend code.
                          In Miare we had two
                          different codebases responsible for different aspects
                          of the system, they
                          had some
                          realtime features implemented using websockets and a
                          lot of REST-based
                          endpoints. Both codebases had good test-coverage,
                          leveraged CI, CD and were
                          highly maintainable. I've done a massive refactoring
                          and basically rewritten
                          most of the GO codebase, and have developed a large
                          portion of the Django
                          code.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div>
                      <h3>
                        Member of Methodology Engineering Lab at Sharif
                        University of Technology<br/>
                        <small>2017 till 2018</small>
                      </h3>

                      <div>
                        I've conducted my BSc project on "Pattern-based
                        development of cloud based
                        applications" under supervision of Dr. Raman Ramsin.
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div>
                      <h3>
                        Junior Java Developer at Idek<br/>
                        <small>Jun 2016 till Feb 2017</small>
                      </h3>

                      <div>
                        I contributed to development of some REST APIs and an
                        admin panel for an online
                        realtime game called Boom with over 50k users. The
                        project was done using a java
                        framework called Dropwizard and its modules including
                        jersey, hibernate,
                        freemarker,
                        etc. For the admin panel I used HTML, bootstrap and
                        jquery in addition to
                        aforementioned technologies.
                        The game is available at
                        <a className="text-light"
                           href="https://cafebazaar.ir/app/ir.idek.boom/?l=en">
                          https://cafebazaar.ir/app/ir.idek.boom/?l=en
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div>
                      <h3>
                        Junior Java Developer at Elenoon<br/>
                        <small>Aug 2015 till Nov 2015</small>
                      </h3>

                      <div>
                        I developed REST APIs using Spring framework. During my
                        collaboration, I
                        contributed
                        to two projects. One was called SMS panel which provided
                        SMS support integrated
                        with
                        their Email service and the other was Senfi. The latter
                        was a website through
                        which
                        companies could publish advertisements and other users
                        could see those
                        advertisements and comment on them through their mobile
                        devices. I worked there
                        as a
                        complete novice and it was my first serious work
                        experience.
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div>
                      <h3>
                        Chemistry Teacher at Mouood, Imam Sadeq, Allame Helli11,
                        etc<br/>
                        <small>2014-2017</small>
                      </h3>

                      <div>
                        I have taught general chemistry to students in several
                        different schools in
                        order to
                        prepare them for Iranian National Chemistry Olympiad. I
                        also wrote a book
                        consisting
                        of a collection of general chemistry problems which is
                        going to be published by
                        IRYSC publication this year.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>


          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Skills</h3></div>
            <div className="card-body">
              <p className="card-text">
                <table className="text-light">
                  <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Patterns and agile methodologies</td>
                    <td>
                      My activities in Methodology Engineering Lab mostly
                      revolved around these topics and I
                      have a good enough knowledge of them.
                    </td>
                  </tr>
                  <tr>
                    <td>Server-side programming</td>
                    <td>
                      I have developed thousands of lines of high-quality,
                      well-tested and maintainable code
                      using multiple programming languages including Python,
                      Java, Go, Kotlin, etc. For doing
                      so I have used many frameworks and technologies including
                      Django, Spring, Dropwizard,
                      Ktor, Hibernate, Gradle, Maven, Glide, Gorm, Echo,
                      Gorilla, Docker, etc.
                    </td>
                  </tr>
                  <tr>
                    <td>Client-side programming</td>
                    <td>
                      I have basic familiarity and have done some relatively
                      small projects using
                      frontend web-development technologies including react,
                      bootstrap, etc.
                    </td>
                  </tr>
                  <tr>
                    <td>Android programming</td>
                    <td>
                      I have basic familiarity with Android development. I have
                      done some small projects and I
                      am
                      recently working on developing a multiplayer online game
                      as a side project.
                    </td>
                  </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </section>


          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Honors and awards</h3></div>
            <div className="card-body">
              <p className="card-text">
                Bronze medal in Iranian Chemistry Olympiad.
              </p>
            </div>
          </section>

          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Languages</h3></div>
            <div className="card-body">
              <p className="card-text">
                <ul className="list-group">
                  <li className="list-group-item">English: Full professional
                    proficiency
                  </li>
                  <li className="list-group-item">Persian: Native language</li>
                </ul>
              </p>
            </div>
          </section>

          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Contact</h3></div>
            <div className="card-body">
              <p className="card-text">
                <table className="text-light">
                  <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Value</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Email</td>
                    <td><a href="mailto: pedram.esmaeeli@gmail.com"
                           className="text-light">pedram.esmaeeli@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td><a href="tel:+989368489804"
                           className="text-light">+989368489804</a></td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td><a href="https://pdrum.github.io"
                           className="text-light">https://pdrum.github.io</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td><a href="http://medium.com/@pedram.esmaeeli"
                           className="text-light">http://medium.com/@pedram.esmaeeli</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Linkedin</td>
                    <td><a href="https://www.linkedin.com/in/phajesmaeeli"
                           className="text-light">https://www.linkedin.com/in/phajesmaeeli</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Github</td>
                    <td><a href="https://github.com/pdrum"
                           className="text-light">https://github.com/pdrum</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </section>
        </div>
      </Col>
    </Row>
  </Container>
;
}
