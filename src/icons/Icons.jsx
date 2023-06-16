import Icon from "@ant-design/icons";
import Amplifier from "./svg/amplifier.svg";
import Fan from "./svg/fan.svg";
import MfHa from "./svg/mf-ha.svg";
import MuxDemux from "./svg/muxdemux.svg";
import Ops from "./svg/ops.svg";
import Root from "./svg/root.svg";
import Spvl from "./svg/spvl.svg";
import Default from './svg/default.svg'

const AmplifierSvg = () => <img src={Amplifier} />;
const FanSvg = () => <img src={Fan} />;
const MfHaSvg = () => <img src={MfHa} />;
const MuxDemuxSvg = () => <img src={MuxDemux} />;
const SpvlSvg = () => <img src={Spvl} />;
const RootSvg = () => <img src={Root} />;
const OpsSvg = () => <img src={Ops} />;
const DefaultSvg = () => <img src={Default} />;

export const AmplifierIcon = (props) => <Icon component={AmplifierSvg} {...props} />;
export const FanIcon = (props) => <Icon component={FanSvg} {...props} />;
export const MfHaIcon = (props) => <Icon component={MfHaSvg} {...props} />;
export const MuxDemuxIcon = (props) => <Icon component={MuxDemuxSvg} {...props} />;
export const SpvlIcon = (props) => <Icon component={SpvlSvg} {...props} />;
export const RootIcon = (props) => <Icon component={RootSvg} {...props} />;
export const OPSIcon = (props) => <Icon component={OpsSvg} {...props} />;
export const DefaulIcon = (props) => <Icon component={DefaultSvg} {...props} />;