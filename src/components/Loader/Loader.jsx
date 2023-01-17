import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import { theme } from '../../styles/theme';

function Loader() {
  return (
    <LoaderWrapper>
      <ThreeDots
        height={theme.spacing(22)}
        width={theme.spacing(22)}
        radius="9"
        color={theme.colors.accent}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
}

export default Loader;
