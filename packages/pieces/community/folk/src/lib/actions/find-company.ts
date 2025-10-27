import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { folkAuth } from '../..';
import { folkApiRequest } from '../common';

export const findCompany = createAction({
  name: 'find_company',
  auth: folkAuth,
  displayName: 'Find a Company',
  description: 'Finds a company by matching its name or one of its emails',
  props: {
    searchTerm: Property.ShortText({
      displayName: 'Search Term',
      description: 'Company name or email to search for',
      required: true,
    }),
  },
  async run(context) {
    const { searchTerm } = context.propsValue;

    const response = await folkApiRequest(
      context.auth,
      HttpMethod.GET,
      `/contacts/search?q=${encodeURIComponent(searchTerm)}&type=company`,
      undefined
    );

    return response;
  },
});
