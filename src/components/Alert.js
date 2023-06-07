import React from 'react' //auto rfce

function Alert(props) {
    const capitalize = (word)=>{// ek funtion banya word pass kra
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); // first letter chd kr sab le lega  

    }
    return (
        <div style ={{height: '50px'}}>
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
            <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
