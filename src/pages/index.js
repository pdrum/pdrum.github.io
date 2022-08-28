import React from "react"
import '../../static/bootstrap.min.css'
import {Badge, Col, Container, Row} from "react-bootstrap"
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
        <div className={`${styles.content} text-light`}>
          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3 className="text-light">Summary</h3>
            </div>
            <div className="card-body text-light">
              <p className="card-text text-light">
                Skilled software engineer with 6+ years of experience,
                developing maintainable tech solutions with a breadth of
                technology stacks for sophisticated domains and large scale.
              </p>
            </div>
          </section>


          <section className="card text-light bg-secondary m-3">
            <div className="card-header text-light"><h3>Education</h3></div>
            <div className="card-body">
              <p className="card-text">
                <table className={`${styles.eduTable} text-light`}>
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
                    <td>Software Engineering (BEng degree)</td>
                  </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </section>

          <section className={`card text-light bg-secondary m-3 ${styles.experience}`}>
            <div className="card-header"><h3>Experiences</h3></div>
            <div className="card-body">
              <div className="card-text">
                <ul className="list-group">

                  <li className="list-group-item">
                    <div className="text-light">
                      <h3>
                        Software Engineer at Glovo <br/>
                        <small>May 2021 till Now</small>
                      </h3>
                      <p>
                        <a className="text-dark" href="https://glovoapp.com">Glovo</a>
                        is a delivery company operating in more than 20 countries based in Barcelona.
                      </p>
                      <p>
                        Projects:<br/>
                        <ul>
                          <li>
                            Enable our data analysts to have better visibility
                            on the assignment of orders to couriers by improving
                            our data pipeline that uses technologies like Avro,
                            Athena, S3, Glue, Kinesis, and Firehose.
                          </li>
                          <li>
                            Stabilize our assignment model in Spain which is
                            different from other countries due to regulations.
                          </li>
                          <li>
                            Prioritize couriers for assignment to couriers based
                            on their performance in some countries.
                          </li>
                          <li>
                            Decrease cost per order by allowing freelance couriers
                            to handle Glovo express orders
                          </li>
                        </ul>
                      </p>
                      <p>
                        Tech Stack:<br/>
                        <ul>
                          <li>Java, Kotlin, Spring Boot</li>
                          <li>Jenkins, Docker, Datadog, Terraform, Ansible</li>
                          <li>AWS</li>
                          <li>MySql, Redise</li>
                        </ul>
                      </p>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="text-light">
                      <h3>
                        Software Engineer at Balad (Hezardastan Group) <br/>
                        <small>Oct 2019 till May 2021</small>
                      </h3>
                      <p>
                        <a className="text-dark" href="https://cafebazaar.ir/app/ir.balad?l=en">Balad Maps</a>
                        is Iran's leading map and navigation platform
                        with more than 4 million users. A product of
                        <a className="text-dark" href="https://www.linkedin.com/company/hezardastan-group/">Hezardastan (Cafebazaar)</a>
                        Information Technology Development Group.
                      </p>
                      <p>
                        Projects:<br/>
                        <ul>
                          <li> Increased team agility and user satisfaction by
                            rewriting then improving the navigation engine.
                          </li>
                          <li> Devised solutions for automatically and
                            continuously doing quality assurance, guaranteeing
                            safer release of the navigation engine.
                          </li>
                          <li> Developed crowd-sourcing and feedback aggregation
                            systems.
                          </li>
                        </ul>
                      </p>
                      <p>
                        Tech Stack:<br/>
                        <ul>
                          <li> Kotlin & Java, Golang, Python/Django</li>
                          <li> Ansible, Docker Swarm, GitlabCI, Grafana,
                            Prometheus, StatsD
                          </li>
                          <li> Kafka, RabbitMQ</li>
                          <li> Redis, Postgres</li>
                        </ul>
                      </p>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="text-light">
                      <h3>
                        Software Engineer at Snapp <br/>
                        <small>May 2019 till Oct 2019</small>
                      </h3>

                      <div>
                        <p>
                          With more than 20 million customers, 1 million
                          drivers,
                          and 2 million rides per day,
                          <a className="text-dark" href="https://cafebazaar.ir/app/cab.snapp.passenger?l=en">Snapp</a>
                          is the first and
                          leading mobile
                          and web-based ride-hailing platform in Iran.
                        </p>
                        <p>
                          Projects:<br/>
                          Crafted services for balancing supply and demand
                          through
                          making adjustments to prices, dynamically comparing
                          and
                          picking the best ETA provider, and sending SMS.
                        </p>
                        <p>
                          Tech Stack:<br/>
                          <ul>
                            <li>Go</li>
                            <li>GitlabCI, Prometheus, Grafana, Openshift,
                              Kubernetes
                            </li>
                            <li>Kafka, RabbitMQ</li>
                            <li>Postgres, Redis</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="text-light">
                      <h3>
                        Software Engineer at Miare <br/>
                        <small>May 2017 till May 2019</small>
                      </h3>

                      <div className="text-light">
                          <p>
                            <a className="text-dark" href="https://landing.miare.ir/">Miare</a> is a B2B food delivery company that
                            restaurants
                            use for outsourcing their food delivery process.
                          </p>

                          Projects:<br/>
                          <p>
                            Having joined the company in its very early days,
                            I played a key role in its transition to an
                            established
                            business by adding new subsystems, debugging highly
                            sophisticated code,
                            refactoring huge legacy codebases, and leading the
                            way
                            for designing new architectures of its new
                            initiatives.
                          </p>

                          Tech Stack:<br/>
                          <ul>
                            <li>Golang, Python/Django, Celery</li>
                            <li>Redis, Postgres</li>
                            <li>Ansible, GitlabCI</li>
                          </ul>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-light">
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
                    <div className="text-light">
                      <h3>
                        Junior Java Developer at Idek<br/>
                        <small>Jun 2016 till Feb 2017</small>
                      </h3>

                      <div>
                        <p>
                          Idek was a very small software development company.
                          Started working there in the summer and in accordance
                          with our initial agreement left after a few months to
                          concentrate on university studies.
                          <span style={{marginRight: "5px"}}/>
                          <a className="text-dark"
                             href="https://cafebazaar.ir/app/ir.idek.boom/?l=en">
                            Here
                          </a> is the game I was working on.
                        </p>
                        <p>
                          Projects:<br/>
                          Helped port parts of the backend of a game from Django
                          to Java.
                        </p>
                        <p>
                          Tech Stack:<br/>
                          <ul>
                            <li>Java, Jersey, Dropwizard</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-light">
                      <h3>
                        Junior Java Developer at Elenoon<br/>
                        <small>Aug 2015 till Nov 2015</small>
                      </h3>

                      <div>
                        <p>Elenoon was a company, developing enterprise solutions such as mail service.</p>
                        <p>
                          Projects:<br/>
                          Extended our corporate Email solution with the option of sending/receiving SMS messages.
                        </p>
                        <p>
                          Tech Stack:<br/>
                          <ul>
                            <li>Java, Spring Boot</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item text-light">
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
              <p className="card-text text-light">
                <Badge bg="dark" className={styles.skillBadge}>Software
                  Architecture</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Go</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Kotlin</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Java</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Python</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Spring</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Django</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Linux</Badge>
                <Badge bg="dark"
                       className={styles.skillBadge}>Javascript</Badge>
                <Badge bg="dark" className={styles.skillBadge}>React</Badge>
                <Badge bg="dark" className={styles.skillBadge}>Git</Badge>
                <Badge bg="dark" className={styles.skillBadge}>AWS</Badge>
                <Badge bg="dark"
                       className={styles.skillBadge}>Kubernetes</Badge>
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
                  <li className="list-group-item text-light">English: Full
                    professional
                    proficiency
                  </li>
                  <li className="list-group-item text-light">Persian: Native
                    language
                  </li>
                </ul>
              </p>
            </div>
          </section>

          <section className="card text-light bg-secondary m-3">
            <div className="card-header"><h3>Contact</h3></div>
            <div className="card-body">
              <p className="card-text">
                <table className={`text-light ${styles.contactTable}`}>
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
