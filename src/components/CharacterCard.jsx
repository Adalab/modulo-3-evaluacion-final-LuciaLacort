import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


const CharacterCard = ({data}) => {
  return (
    <article>
      <Link className='character__card' to={`/characterDetail/${data.id}`}>
        <img src={data.image} alt={`Foto del personaje: ${data.name}`}  />
        <span>{data.name}</span>
        <span>{data.species}</span>
      </Link>
    </article>
  )
}

CharacterCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterCard;

