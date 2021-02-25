import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import CardData from "./CardData";

const Grants = () => {
  const [grantData, setGrantData] = useState([]);
  const [favoriteArray, setFavoriteArray] = useState([]);

  const getGrantData = async () => {
    try {
      const response = await fetch(
        "https://www.sbir.gov/api/solicitations.json?keyword=sbir",
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      const data = await response.json();
      setGrantData(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getGrantData();
  }, []);

  return (
    <>
      <Container className="card-grid">
        {grantData.map((grant, index) => (
          <Row key={index}>
            <Col className="col-lg-4 d-flex align-items-stretch">
              <CardData grant={grant} favoriteArray={favoriteArray} />
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Grants;
