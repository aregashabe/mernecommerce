import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p._id === productId);


  const [qty, setQty] = useState(1);
  const [comment, setComment] = useState('');
  const loadingProductReview = false;

  const addToCartHandler = () => {
    navigate('/cart');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success('Review submitted');
    // Add your logic to save review
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row className='review'>
        <Col md={6}>
          <h2>Reviews</h2>
          {product.reviews?.length === 0 && <div>No Reviews</div>}
          <ListGroup variant='flush'>
            {product.reviews?.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating} />
                <p>{review.createdAt?.substring(0, 10)}</p>
               
              </ListGroup.Item>
            ))}

            <ListGroup.Item>
             

            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
