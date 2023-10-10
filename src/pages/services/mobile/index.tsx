import React, { useState } from 'react';
import { Select } from '@/shared/ui-kit/select/select';
import { SERVICES_CONSTANTS } from '@/widgets/services/constants';
import { ServiceInfoModal } from '@/widgets/service-info-modal/service-info-modal';
import { BalanceCheck } from '@/widgets/balance-check/balance-check';

function Mobile() {

  const [showBalanceCheckModal, setShowBalanceCheckModal] = useState(false);
  const [showServiceInfoModal, setShowServiceInfoModal] = useState(false);
  {/* //TODO перенести */ }
  const handleCloseBalanceCheckModal = () => {
    setShowBalanceCheckModal(false);
  };

  const openBCModal = () => {
    setShowBalanceCheckModal(true);
  }

  const handleCloseServiceInfoModal = () => {
    setShowServiceInfoModal(false);
  };

  const openSIModal = () => {
    setShowServiceInfoModal(true);
  }

  return (
    <>
      <Select
        data={[
          SERVICES_CONSTANTS.POPULAR,
          SERVICES_CONSTANTS.MOBILE,
          SERVICES_CONSTANTS.INTERNET,
          SERVICES_CONSTANTS.FAST,
          SERVICES_CONSTANTS.SPECIAL,
        ]}
        defaultValue={SERVICES_CONSTANTS.MOBILE}
        placeholder='выберите услугу'
        label='выберите услугу'
      />

      <div> {/* //TODO перенести */}
        <div onClick={openBCModal}>Проверка баланса</div>
        <div onClick={openSIModal}>Аккордеон</div>
      </div>
      <ServiceInfoModal opened={showServiceInfoModal} onClose={handleCloseServiceInfoModal} />
      <BalanceCheck opened={showBalanceCheckModal} onClose={handleCloseBalanceCheckModal} />
    </>
  );
}

export default Mobile;
