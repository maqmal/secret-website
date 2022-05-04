import React, {useCallback} from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SoundBar from './soundbar';

import { useHistory } from 'react-router-dom';

export default function SoundAndHome() {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/main'), [history]);
    return (
        <>
            {/* <span><HomeRoundedIcon style={{top:'5rem', left:'5rem', fontSize:50, cursor:'pointer', color:'grey'}} onClick={handleOnClick}/></span> */}
            <span><center><SoundBar/></center></span>
        </>
    );
}
