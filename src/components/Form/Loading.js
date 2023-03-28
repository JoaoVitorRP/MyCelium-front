import { ThreeDots } from 'react-loader-spinner';
import { COLORS } from '../../services/Constants/colors';
const { WHITE } = COLORS;

export default function LoadingDots() {
  return <ThreeDots height="50" width="50" radius="9" color={WHITE} ariaLabel="three-dots-loading" visible={true} />;
}
