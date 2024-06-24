import './Carousel.css'
import { Carousel } from 'react-bootstrap';
function Carousal() {
    const items = [
        { image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Slide 3', text: 'This is the third slide' },
        { image: 'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Slide 1', text: 'This is the first slide' },
        { image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Slide 2', text: 'This is the second slide' },
    ];
  return (
   
    <div className="custom-carousel-container">
    <Carousel>
        {items.map((item, index) => (
            <Carousel.Item key={index}>
                <img
                    className="d-block w-100"
                    src={item.image}
                    alt={`Slide ${index}`}
                />
            </Carousel.Item>
        ))}
    </Carousel>
</div>
  )
}

export default Carousal;