import PropTypes from 'prop-types';
interface Props {
    redirectTo?: string;
}
declare const LoginForm: {
    (props: Props): JSX.Element;
    propTypes: {
        redirectTo: PropTypes.Requireable<string>;
    };
};
export default LoginForm;
