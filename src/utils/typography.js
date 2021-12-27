import Typography from 'typography';
import fairyGateTheme from 'typography-theme-fairy-gates';

fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: '#de6b35',
  },
});

const typography = new Typography(fairyGateTheme);

export const { scale, rhythm, options } = typography;
export default typography;
