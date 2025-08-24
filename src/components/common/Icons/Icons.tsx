import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, type IconDefinition } from "@fortawesome/free-regular-svg-icons";

type IconName = "faHeart" | "faHeartRegular";

type IconProps = {
  icon: IconName;
  color: string;
  size: string;
};

const iconMapping: Record<IconName, IconDefinition> = {
  faHeart: faHeart,
  faHeartRegular: faHeartRegular,
};

export default function Icons({ icon, color, size }: IconProps) {
  return <FontAwesomeIcon icon={iconMapping[icon]} style={{ fontSize: size, color: color }} />;
}
