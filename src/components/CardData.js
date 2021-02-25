import React, { useState } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";

const CardData = ({ grant, favoriteArray }) => {
  const [readMoreBtn, setReadMoreBtn] = useState(false);
  const [favorite, setFavorite] = useState(true);

  const onToggleArray = () => {
    setFavorite(favorite === false ? true : false);
    let index = favoriteArray.indexOf(grant);
    if (index >= 0) {
      favoriteArray.splice(index, 1);
    } else {
      favoriteArray.push(grant);
    }

    console.log(favorite);
    console.log(favoriteArray);
    return {
      favoriteArray
    };
  };

  const toggleReadMoreBtn = () => {
    setReadMoreBtn(!readMoreBtn);
  };

  return (
    <>
      <Container className="mt-5">
        <Card style={{ width: "20rem", height: "100%" }}>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{grant.solicitation_title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {grant.agency}
            </Card.Subtitle>
            {readMoreBtn === false ? (
              <Card.Text
                className="text-truncate"
                style={{ maxWidth: "150px" }}
              >
                {grant.solicitation_topics.map(
                  (topic) => topic.topic_description
                )}
              </Card.Text>
            ) : (
              <Card.Text>
                {grant.solicitation_topics.map(
                  (topic) => topic.topic_description
                )}
              </Card.Text>
            )}
            <div className="mt-auto" style={{ marginBottom: "-1rem" }}>
              <Button className="d-flex m-auto" onClick={toggleReadMoreBtn}>
                Read More
              </Button>
              <br />
              <Card.Link href={grant.sbir_solicitation_link}>
                SBIR Solicitation Link
              </Card.Link>
              <br />
              <Card.Link href={grant.solicitation_agency_url}>
                Solicitation Agency URL
              </Card.Link>
              <Form style={{ float: "right" }}>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Favorite"
                    onClick={onToggleArray}
                  />
                </Form.Group>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CardData;
