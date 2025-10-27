import { HttpMethod, httpClient, HttpRequest } from '@activepieces/pieces-common';

export const FOLK_API_BASE_URL = 'https://api.folk.app/v1';

export interface FolkContact {
  contactId: string;
  name?: string;
  email?: string;
  [key: string]: any;
}

export interface FolkCompany {
  contactId: string;
  name?: string;
  domain?: string;
  [key: string]: any;
}

export async function folkApiRequest<T>(
  auth: string,
  method: HttpMethod,
  endpoint: string,
  body?: any
): Promise<T> {
  const request: HttpRequest = {
    method,
    url: `${FOLK_API_BASE_URL}${endpoint}`,
    headers: {
      'Authorization': `Bearer ${auth}`,
      'Content-Type': 'application/json',
    },
    body,
  };

  const response = await httpClient.sendRequest<T>(request);
  return response.body;
}
