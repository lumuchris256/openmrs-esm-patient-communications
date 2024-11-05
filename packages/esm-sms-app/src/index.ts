import { defineConfigSchema, getAsyncLifecycle } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';

const moduleName = '@openmrs/esm-sms-app';

const options = {
  featureName: 'provider-settings',
  moduleName,
};

export const importTranslation = require.context('../translations', true, /.json$/, 'lazy');

export const providersDashboard = getAsyncLifecycle(() => import('./providers/providers-dashboard.component'), options);

export const smsAdminCardLink = getAsyncLifecycle(() => import('./sms-admin-card-link.component'), options);

// t('providerConfigTestWorkspaceTitle', 'Test configuration');
export const providerConfigTestForm = getAsyncLifecycle(
  () => import('./providers/test-form/provider-config-test-form.workspace'),
  options,
);

// t('addProviderConfigWorkspaceTitle', 'Add Provider');
export const addProviderConfigForm = getAsyncLifecycle(
  () => import('./providers/add-config-form/provider-config-form.workspace'),
  options,
);

export const configUploadModal = getAsyncLifecycle(() => import('./providers/modals/config-upload.modal'), options);

export const removeConfigModal = getAsyncLifecycle(() => import('./providers/modals/remove-config.modal'), options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
