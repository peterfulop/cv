import * as Icons from "react-icons/si";
import { IGenericIconProps } from "../../utils/cv.interface";

export const GenericIcon = ({ iconName }: IGenericIconProps): JSX.Element => {
  const Icon = Icons[iconName];
  return <Icon />;
};
