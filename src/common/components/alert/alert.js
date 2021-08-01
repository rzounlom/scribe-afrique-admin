import { AlertAction, AlertContainer, AlertMessageContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';
import { FiInfo } from 'react-icons/fi';
import React from 'react';
import { removeMessage } from '../../../state/actions/dashboard/dashboardActions';

const Alert = () => {
  const dispatch = useDispatch();
  const { messageShow, alertMessage, alertType } = useSelector(
    (state) => state.dashboard
  );
  const renderAlertIcon = () => {
    switch (alertType) {
      case 'error':
        return <BiError />;
      case 'success':
        return <AiOutlineCheckCircle />;
      case 'info':
        return <FiInfo />;
      default:
        return <BiError />;
    }
  };
  return (
    <AlertContainer show={messageShow} type={alertType}>
      <AlertMessageContainer>
        {renderAlertIcon()}
        {alertMessage}
      </AlertMessageContainer>
      <AlertAction onClick={() => dispatch(removeMessage())}>X</AlertAction>
    </AlertContainer>
  );
};

export default Alert;
