import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layer, ClickableTile } from '@carbon/react';
import { ArrowRight } from '@carbon/react/icons';

const SMSAdminCardLink: React.FC = () => {
  const { t } = useTranslation();
  const header = t('smsConfiguration', 'SMS Configuration');
  return (
    <Layer>
      <ClickableTile href={window.spaBase + '/provider-settings'} rel="noopener noreferrer" target="_blank">
        <div>
          <div className="heading">{header}</div>
          <div className="content">{t('smsProviderSettings', 'SMS Provider Settings')}</div>
        </div>
        <div className="iconWrapper">
          <ArrowRight size={16} />
        </div>
      </ClickableTile>
    </Layer>
  );
};

export default SMSAdminCardLink;
