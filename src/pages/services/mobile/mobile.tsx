import React, { useState } from 'react';
import { Select } from '@/shared/ui-kit/select/select';
import { SERVICES_CONSTANTS } from '@/modules/services/constants';
import { ServiceInfoModal } from '@/modules/services/service-info-modal/service-info-modal';
import { BalanceCheck } from '@/modules/services/balance-check/balance-check';

const Mobile = () => {
  const [showBalanceCheckModal, setShowBalanceCheckModal] = useState(false);
  const [showServiceInfoModal, setShowServiceInfoModal] = useState(false);
  {
    /* //TODO перенести */
  }
  const handleCloseBalanceCheckModal = () => {
    setShowBalanceCheckModal(false);
  };

  const openBCModal = () => {
    setShowBalanceCheckModal(true);
  };

  const handleCloseServiceInfoModal = () => {
    setShowServiceInfoModal(false);
  };

  const openSIModal = () => {
    setShowServiceInfoModal(true);
  };

  return (
    <>
      <Select data={SERVICES_CONSTANTS.map(({ label, name }) => ({ label, value: name }))} />

      <div>
        {' '}
        {/* //TODO перенести */}
        <div onClick={openBCModal}>Проверка баланса</div>
        <div onClick={openSIModal}>Аккордеон</div>
      </div>
      <ServiceInfoModal opened={showServiceInfoModal} onClose={handleCloseServiceInfoModal} />
      <BalanceCheck opened={showBalanceCheckModal} onClose={handleCloseBalanceCheckModal} />
    </>
  );
};

export { Mobile };
