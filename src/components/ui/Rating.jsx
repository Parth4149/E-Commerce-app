import { ImStarFull } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";

const Rating = ({ rating }) => (
  <div className="book__ratings">
    {new Array(Math.floor(rating)).fill(0).map((_, index) => (
      <ImStarFull key={index} />
    ))}
    {rating % 1 >= 0.5 && <ImStarHalf />} {/* for 0.5 rating */}
  </div>
);

export default Rating;
