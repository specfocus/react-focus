"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const styles_1 = require("@mui/styles");
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const LockOutlined_1 = __importDefault(require("@mui/icons-material/LockOutlined"));
const Paper_1 = __importDefault(require("../../components/Paper"));
const TranslatedLink_1 = __importDefault(require("../../components/TranslatedLink"));
const Layout_1 = require("../../containers/Layout");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function SignIn() {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(Layout_1.Frame, Object.assign({ name: "sign-in", title: "Sign In" }, { children: (0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ component: "main", maxWidth: "xs" }, { children: (0, jsx_runtime_1.jsxs)(Paper_1.default, { children: [(0, jsx_runtime_1.jsxs)("header", Object.assign({ className: classes.paper }, { children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, Object.assign({ className: classes.avatar }, { children: (0, jsx_runtime_1.jsx)(LockOutlined_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "h1", variant: "h5" }, { children: "Sign In" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("form", Object.assign({ className: classes.form, noValidate: true }, { children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }, void 0), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password" }, void 0), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { value: "remember", color: "primary" }, void 0), label: "Remember me" }, void 0), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, { children: "Sign In" }), void 0), (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedLink_1.default, Object.assign({ i18nKey: "forgot-password", to: "#", variant: "body2" }, { children: "Forgot password?" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedLink_1.default, Object.assign({ i18nKey: "sign-up", to: "/sign-up", variant: "body2" }, { children: "Don't have an account? Sign Up" }), void 0) }), void 0)] }), void 0)] }), void 0)] }, void 0) }), void 0) }), void 0));
}
exports.default = SignIn;
