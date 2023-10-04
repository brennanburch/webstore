import { useEffect, useState} from 'react';
import { Link,  useParams  } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, ListGroupItem } from 'react-bootstrap';
import Rating from "../components/Rating";
import axios from "axios";
import React from "react";

const Productscreen = () => {
  const[product, setProduct] = useState({});

  const { id: productID} = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productID}`);
      setProduct(data);
    };

    fetchProduct();
  }, [productID]);
    
    console.log(product);
  return (
   <>
   <Link className="btn btn-light my-3" to="/">Go Back</Link>
   <Row>
    <Col md={6}>
    <Image src={product.image} alt={product.name} fluid />
    </Col>
    <Col md={6}>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h3>{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </ListGroup.Item>
        <ListGroupItem>
          Description: {product.description}
        </ListGroupItem>
        <ListGroupItem>
            <Row>
              <Col>Price:</Col>
              <Col><strong>${product.price}</strong></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
              Status:
              </Col>
              <Col>
              <strong>{product.countInStock >0 ? 'In Stock' : 'Out of stock'}</strong>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button className="btn-block"
            type='button'
            disabled={product.countInStock ===0}>{product.countInStock >0 ? 'Add To Cart' : 'Out Of Stock'}</Button>
          </ListGroupItem>
      </ListGroup>
    </Col>
    

   </Row>
   </>
  )
}

export default Productscreen