import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { folkAuth } from '../..';
import { folkApiRequest } from '../common';

export const createCompany = createAction({
  name: 'create_company',
  auth: folkAuth,
  displayName: 'Create Company',
  description: 'Creates a new company contact in a folk group',
  props: {
    name: Property.ShortText({
      displayName: 'Company Name',
      description: 'The name of the company',
      required: true,
    }),
    groups: Property.Array({
      displayName: 'Group IDs',
      description:
        'Array of group IDs to add the company to (optional, but recommended)',
      required: false,
    }),
    description: Property.LongText({
      displayName: 'Description',
      description: 'Company description',
      required: false,
    }),
    urls: Property.Array({
      displayName: 'URLs',
      description: 'Array of company website URLs',
      required: false,
    }),
    emails: Property.Array({
      displayName: 'Emails',
      description: 'Array of company email addresses',
      required: false,
    }),
    phones: Property.Array({
      displayName: 'Phone Numbers',
      description: 'Array of company phone numbers',
      required: false,
    }),
    addresses: Property.Array({
      displayName: 'Addresses',
      description: 'Array of company addresses',
      required: false,
    }),
    industry: Property.ShortText({
      displayName: 'Industry',
      description: 'Company industry',
      required: false,
    }),
    foundationYear: Property.ShortText({
      displayName: 'Foundation Year',
      description: 'Year the company was founded (YYYY format)',
      required: false,
    }),
    employeeRange: Property.ShortText({
      displayName: 'Employee Range',
      description: 'Employee count range (e.g., "51-200")',
      required: false,
    }),
    fundingRaised: Property.ShortText({
      displayName: 'Funding Raised',
      description: 'Total funding raised',
      required: false,
    }),
    lastFundingDate: Property.ShortText({
      displayName: 'Last Funding Date',
      description: 'Date of last funding round (YYYY-MM-DD format)',
      required: false,
    }),
    customFieldValues: Property.Json({
      displayName: 'Custom Field Values',
      description: 'Custom field values grouped by group IDs (JSON object)',
      required: false,
    }),
  },
  async run(context) {
    const {
      name,
      groups,
      description,
      urls,
      emails,
      phones,
      addresses,
      industry,
      foundationYear,
      employeeRange,
      fundingRaised,
      lastFundingDate,
      customFieldValues,
    } = context.propsValue;

    const body: any = {
      name,
    };

    if (groups && groups.length > 0) body.groups = groups;
    if (description) body.description = description;
    if (urls && urls.length > 0) body.urls = urls;
    if (emails && emails.length > 0) body.emails = emails;
    if (phones && phones.length > 0) body.phones = phones;
    if (addresses && addresses.length > 0) body.addresses = addresses;
    if (industry) body.industry = industry;
    if (foundationYear) body.foundationYear = foundationYear;
    if (employeeRange) body.employeeRange = employeeRange;
    if (fundingRaised) body.fundingRaised = fundingRaised;
    if (lastFundingDate) body.lastFundingDate = lastFundingDate;
    if (customFieldValues) body.customFieldValues = customFieldValues;

    const response = await folkApiRequest(
      context.auth,
      HttpMethod.POST,
      '/companies',
      body
    );

    return response;
  },
});
