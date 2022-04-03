import React from 'react';
import Troubleshot from "../../assets/Capture.jpg";
import LastMinute from "../../assets/LastMinute.jpg";
import WorthIt from "../../assets/WorthIt.jpg";
import TrackBudget from "../../assets/TrackBudget.jpg";
import WorkDay from "../../assets/WorkDay.jpg";
import TakeNotes from "../../assets/TakeNotes.jpg";

import { Card } from 'react-bootstrap'
import { CardGroup } from 'react-bootstrap'

function Portfolio() {
  return (
    <section className="my-5">
    <h1 id="about">Portfolio</h1>
    <p>Have a look at some of my past project! Feel free to test them out or have a look at their repo on GitHub!</p>

    <CardGroup>
  <Card>
    <Card.Img variant="top" className="portfolioCard" style={{ width: "75%" }} alt="aboutSection" src= {WorthIt}/>
    <Card.Body>
      <Card.Title>Worth It</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Link href="https://worth-it-2022.herokuapp.com/">Check it out!</Card.Link>
      <Card.Link href="https://github.com/Hone12345678/WorthIt" class="fa fa-github"></Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">2022</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="portfolioCard" style={{ width: "75%" }} alt="aboutSection" src= {Troubleshot} />
    <Card.Body>
      <Card.Title>Troubleshot</Card.Title>
      <Card.Text>
      Troubleshot is a database that organizes your problems by categories, displays the associated solution to your problem, and allows you to search the database based on user input. 
      </Card.Text>
      <Card.Link href="https://troubleshot.herokuapp.com/login">Check it out!</Card.Link>
      <Card.Link href="https://github.com/Hone12345678/Troubleshot" class="fa fa-github"></Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">2022</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="portfolioCard" style={{ width: "70%" }} alt="aboutSection" src= {LastMinute} />
    <Card.Body>
      <Card.Title>Last Minute</Card.Title>
      <Card.Text>
      This is an easy to use application designed to take the stress out of planning out a night at the last minute. Feel like there's not enough time in a day? Do you have random items in your fridge that you don't want to go to waste? Would you like to put something together last minute? Well that's what this is for!

      </Card.Text>
      <Card.Link href="https://hone12345678.github.io/lastMinute/">Check it out!</Card.Link>
      <Card.Link href="https://github.com/Hone12345678/lastMinute" class="fa fa-github"></Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">2021</small>
    </Card.Footer>
  </Card>
</CardGroup>

<CardGroup>
  <Card>
    <Card.Img variant="top" className="portfolioCard" style={{ width: "75%" }} alt="aboutSection" src= {TrackBudget} />
    <Card.Body>
      <Card.Title>Budget Tracker</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Link href="https://troubleshot.herokuapp.com/login">Check it out!</Card.Link>
      <Card.Link href="https://github.com/Hone12345678/Troubleshot" class="fa fa-github"></Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">2022</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="portfolioCard" style={{ width: "75%" }} alt="aboutSection" src= {WorkDay} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Link href="https://troubleshot.herokuapp.com/login">Check it out!</Card.Link>
      <Card.Link href="https://github.com/Hone12345678/Troubleshot" class="fa fa-github"></Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">2022</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="portfolioCard" style={{ width: "75%" }} alt="aboutSection" src= {TakeNotes} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Link href="https://troubleshot.herokuapp.com/login">Check it out!</Card.Link>
      <Card.Link href="https://github.com/Hone12345678/Troubleshot" class="fa fa-github"></Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">2022</small>
    </Card.Footer>
  </Card>
</CardGroup>

  </section> 
  );
}

export default Portfolio;