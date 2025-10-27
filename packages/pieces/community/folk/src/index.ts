import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { PieceCategory } from '@activepieces/shared';

// Actions
import { createCompany } from './lib/actions/create-company';
import { updateCompany } from './lib/actions/update-company';
import { createPerson } from './lib/actions/create-person';
import { updatePerson } from './lib/actions/update-person';
import { findCompany } from './lib/actions/find-company';
import { getCompany } from './lib/actions/get-company';
import { findPerson } from './lib/actions/find-person';
import { getPerson } from './lib/actions/get-person';

// Triggers
import { companyAdded } from './lib/triggers/company-added';
import { companyRemoved } from './lib/triggers/company-removed';
import { companyCustomFieldUpdated } from './lib/triggers/company-custom-field-updated';
import { companyUpdated } from './lib/triggers/company-updated';
import { personAdded } from './lib/triggers/person-added';
import { personRemoved } from './lib/triggers/person-removed';
import { personCustomFieldUpdated } from './lib/triggers/person-custom-field-updated';
import { personUpdated } from './lib/triggers/person-updated';

export const folkAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'Enter your Folk API Key. You can find it in Folk Settings > Integrations > API',
});

export const folk = createPiece({
  displayName: "Folk",
  auth: folkAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: "https://cdn.activepieces.com/pieces/folk.png",
  authors: [],
  categories: [PieceCategory.SALES_AND_CRM],
  actions: [
    // Write Actions
    createCompany,
    updateCompany,
    createPerson,
    updatePerson,
    // Search Actions
    findCompany,
    getCompany,
    findPerson,
    getPerson,
  ],
  triggers: [
    // Company Triggers
    companyAdded,
    companyRemoved,
    companyCustomFieldUpdated,
    companyUpdated,
    // Person Triggers
    personAdded,
    personRemoved,
    personCustomFieldUpdated,
    personUpdated,
  ],
});