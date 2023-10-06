import { Select } from '@/shared/ui-kit/select/select';
import { SERVICES_CONSTANTS } from '@/widgets/services/constants';

function Mobile() {
  return (
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
  );
}

export default Mobile;
