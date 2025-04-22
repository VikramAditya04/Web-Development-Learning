import './Amazon.css'
import Price from './Price';
import Image from './Image';
import img1 from './assets/Logitech MX Master 3S.jpg';
import img2 from './assets/Apple Pencil (2nd gen).jpg';
import img3 from './assets/Zebronics Zeb-Transformer.jpg';
import img4 from './assets/Portronics Wireless Mouse.jpg';

function Card({title, idx}){
    let image = [img1, img2, img3, img4];
    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["8,999", "9,199", "899", "278"];
    const description = [
        ['8,000 DPI', '5 Programmable Buttons'],
        ['Intuitive touch surface', 'Designed for ipad Pro'],
        ['RGB Lighting', 'High-precision sensor'],
        ['Wireless Mouse 2.4GHz', 'Optical oreintation']
      ];      

    return (
        <div className="cards">
            <h4>{title}</h4>
            <Image image={image[idx]} />
            <ul className="description">
                {description[idx].map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
</div>

    )
}
export default Card;