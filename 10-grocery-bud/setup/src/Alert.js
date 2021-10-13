import React, {useEffect} from 'react'

const Alert = ({type, msg, input, removeAlert}) => {
  useEffect(() => {
    const alertNotify = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(alertNotify);
  }, [input]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert
