import Icon from "@ant-design/icons";
import Amplifier from "./svg/amplifier.svg";
import Fan from "./svg/fan.svg";
import MfHa from "./svg/mf-ha.svg";
import MuxDemux from "./svg/muxdemux.svg";
import Ops from "./svg/ops.svg";
import Root from "./svg/root.svg";
import Spvl from "./svg/spvl.svg";
import Default from './svg/default.svg'
import Roadm from "./svg/roadm.svg";
import Ocm from './svg/ocm.svg';
import Transponder from "./svg/transponder.svg";
import Ssc from './svg/ssc.svg';

const AmplifierSvg = () => <img src={Amplifier} style={{width: '100%'}} />;
const FanSvg = () => <img src={Fan} style={{width: '100%'}} />;
const MfHaSvg = () => <img src={MfHa} style={{width: '100%'}} />;
const MuxDemuxSvg = () => <img src={MuxDemux} style={{width: '100%'}} />;
const SpvlSvg = () => <img src={Spvl} style={{width: '100%'}} />;
const RootSvg = () => <img src={Root} style={{width: '100%'}} />;
const OpsSvg = () => <img src={Ops} style={{width: '100%'}} />;
const DefaultSvg = () => <img src={Default} style={{width: '100%'}} />;
const RoadmSvg = () => <img src={Roadm} style={{width: '100%'}} />;
const OcmSvg = () => <img src={Ocm} style={{width: '100%'}} />;
const TransponderSvg = () => <img src={Transponder} style={{width: '100%'}} />;
const SscSvg = () => <img src={Ssc} style={{width : '100%'}} />;

export const AmplifierIcon = (props) => <Icon component={AmplifierSvg} {...props} />;
export const FanIcon = (props) => <Icon component={FanSvg} {...props} />;
export const MfHaIcon = (props) => <Icon component={MfHaSvg} {...props} />;
export const MuxDemuxIcon = (props) => <Icon component={MuxDemuxSvg} {...props} />;
export const SpvlIcon = (props) => <Icon component={SpvlSvg} {...props} />;
export const RootIcon = (props) => <Icon component={RootSvg} {...props} />;
export const OPSIcon = (props) => <Icon component={OpsSvg} {...props} />;
export const RoadmIcon = (props) => <Icon component={RoadmSvg} {...props}/>;
export const OcmIcon = (props) => <Icon component={OcmSvg} {...props} />;
export const DefaultIcon = (props) => <Icon component={DefaultSvg} {...props} />;
export const TransponderIcon = (props) => <Icon component={TransponderSvg} {...props} />;
export const SscIcon = (props) => <Icon component={SscSvg} {...props} />;