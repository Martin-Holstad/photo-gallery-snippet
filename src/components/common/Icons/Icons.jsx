import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function Icons({ icon, color, size }) {
  const icons = {
    faHeart: faHeart,
    faHeartRegular: faHeartRegular,
  };

  return <FontAwesomeIcon icon={icons[icon]} style={{ fontSize: size, color: color }} />;
}
