import WiRefresh from "./icons/WiRefresh";
import styled from "@emotion/styled";
import { Colors } from "./sharedStyles";

const Load = styled(WiRefresh)`
  fill: ${Colors.default};
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-origin: 50% 52%;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ isLoading }) =>
  isLoading ? <Load width={64} height={64} /> : null;
export default Loader;
