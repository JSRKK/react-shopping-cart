import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BootstrapButton = withStyles({
    root: {
        backgroundColor: '#1b1a20',
        color: '#fff',
        '&:hover': {
            border: '1px solid #eee',
            backgroundColor: '#eabf00'
        }
    },
})(Button);

export default BootstrapButton;