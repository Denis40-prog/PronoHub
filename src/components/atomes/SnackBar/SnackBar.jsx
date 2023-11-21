import React from 'react';

const SnackBar = ({...props}) => {
    return (
        <div id="toast-bottom-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-white bg-primary divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg right-5 bottom-5" role="alert">
            <div className="text-sm font-normal">{props.msg}</div>
        </div>
    )
}

export default SnackBar;